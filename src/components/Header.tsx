'use client';

import { IconMoon, IconSun, IconTrash } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { useEditorContext } from '@/context/EditorContext';

import Button from './Button';
import ActionButtons from './ButtonGroups/ActionButtons';
import Divider from './Divider';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { handleEditorStateChange } = useEditorContext();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  const isDarkMode = theme === 'dark';

  if (!loaded) return null;

  return (
    <header className="flex items-center justify-between bg-zinc-100 p-3 dark:bg-zinc-700">
      <div className="flex h-full items-center">
        <h1 className="mx-1 h-fit font-bold uppercase tracking-[0.5rem] text-zinc-800 dark:text-zinc-200">
          markdown
        </h1>
        <Divider />
        <div className="flex items-center gap-1">
          <ActionButtons />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Button onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
          {isDarkMode ? <IconMoon /> : <IconSun />}
        </Button>
        <Button onClick={() => handleEditorStateChange('')} type="danger">
          <IconTrash />
        </Button>
      </div>
    </header>
  );
}
