import { getTopTracks } from 'app/components/spotify/spotify';
import Track from './track';
import { Song, TrackInfo } from './types';

async function fetchTopTracks(): Promise<Song[] | null> {
  try {
    const response = await getTopTracks();

    // Check if response is ok
    if (!response.ok) {
      throw new Error(`Spotify API Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    // Debug logging only in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Spotify API response:', data);
    }

    // Check if items exists
    if (!data?.items) {
      throw new Error('No items found in Spotify response');
    }

    const tracks = data.items.slice(0, 5).map((track: TrackInfo) => ({
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }));

    return tracks;
  } catch (e) {
    if (e instanceof Error) {
      console.error('Spotify API Error:', e.message);
    }
    return null;
  }
}

export default async function TopTracks() {
  const topTracks = await fetchTopTracks();

  if (!topTracks) {
    return (
      <section className="py-7">
        <p className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Spotify Top Songs
        </p>
        <p className="text-gray-600 dark:text-gray-400">Unable to load tracks at the moment</p>
      </section>
    );
  }

  return (
    <section className="py-7">
      <p className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
        Spotify Top Songs
      </p>
      {topTracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} track={track} />
      ))}
    </section>
  );
}
