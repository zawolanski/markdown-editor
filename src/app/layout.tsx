import './globals.css';
import './markdown.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Markdown',
  description: 'Create your markdown file effortlessly',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-zinc-300 dark:bg-zinc-900" style={inter.style}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
