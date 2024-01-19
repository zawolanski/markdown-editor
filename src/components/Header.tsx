'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import Button from './Button';
import GeneralButtons from './ButtonGroups/General';
import List from './ButtonGroups/List';
import Divider from './Divider';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  const isDarkMode = theme === 'dark';

  if (!loaded) return null;

  return (
    <header className="flex justify-between border-b-2 border-slate-200 p-2 dark:border-slate-800">
      <div className="flex items-center">
        <GeneralButtons />
        <Divider />
        <List />
      </div>
      <div>
        <Button onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
          {isDarkMode ? <IconMoon /> : <IconSun />}
        </Button>
      </div>
    </header>
  );
}
