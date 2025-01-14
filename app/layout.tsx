import '@fontsource/mukta';
import './tailwind.css';

import Analytics from 'app/components/analytics/analytics';
import Footer from 'app/components/layouts/footer';
import Header from 'app/components/layouts/header';
import ThemeProvider from 'app/components/providers/ThemeProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | Arman Hossen',
    default: 'Arman Hossen',
  },
  description: 'I build things for the web.',
  metadataBase: new URL('https://armanruet52.github.io'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/static/favicons/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className="bg-white text-black antialiased dark:bg-black dark:text-white"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={['dark', 'light']}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
