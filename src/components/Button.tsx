'use client';

import { clsx } from 'clsx/lite';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isPrimary?: boolean;
  size?: 'small' | 'medium';
}

export default function Button(props: ButtonProps) {
  const { children, onClick, isPrimary, size } = props;

  return (
    <button
      type="button"
      className={clsx(
        'flex h-fit gap-1 rounded-md p-2 font-semibold text-zinc-800 transition-colors hover:bg-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-600',
        isPrimary &&
          'bg-orange-500 text-white hover:bg-orange-400 dark:hover:bg-orange-400',
        size === 'small' && 'p-1.5',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
