import { cache } from 'react';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

if (!client_id || !client_secret || !refresh_token) {
  throw new Error('Missing required Spotify credentials in environment variables');
}

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  // Add debug logging
  console.log('Debug: Attempting Spotify authentication with:', {
    hasClientId: !!client_id,
    clientIdLength: client_id?.length,
    hasClientSecret: !!client_secret,
    secretLength: client_secret?.length,
    hasRefreshToken: !!refresh_token,
    tokenLength: refresh_token?.length,
    basic: basic.slice(0, 10) + '...', // Show first 10 chars of basic auth
  });

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token,
  });

  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
      next: {
        revalidate: 3600,
      },
    });

    // Add response debugging
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Spotify API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        errorBody: errorText,
        requestHeaders: {
          contentType: response.headers.get('content-type'),
          // Don't log actual auth header
          hasAuthHeader: !!response.headers.get('authorization'),
        },
      });
      throw new Error(
        `Failed to get access token: ${response.status} ${response.statusText}\n${errorText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error('Spotify API Request Failed:', error);
    throw error;
  }
};

export const getNowPlaying = cache(async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 30,
    },
  });
});

export const getTopTracks = cache(async () => {
  const { access_token } = await getAccessToken();

  if (!access_token) {
    throw new Error('No access token returned');
  }

  // Debug log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Fetching top tracks with valid access token');
  }

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 3600,
    },
  });
});
