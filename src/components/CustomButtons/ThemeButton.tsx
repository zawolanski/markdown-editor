'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

import Button from '../Button';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <Button
      onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
      tooltip={isDarkMode ? 'Light' : 'Dark'}
    >
      {isDarkMode ? <IconMoon /> : <IconSun />}
    </Button>
  );
};

export default ThemeButton;
