'use client';

import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

import { store } from '@/store/store';

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
