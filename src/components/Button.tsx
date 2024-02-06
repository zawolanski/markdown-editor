'use client';

import { clsx } from 'clsx/lite';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  size?: 'small' | 'medium';
  type?: 'primary' | 'danger';
}

export default function Button(props: ButtonProps) {
  const { children, onClick, type, size } = props;

  return (
    <button
      type="button"
      className={clsx(
        'flex h-fit gap-1 rounded-md p-2 font-semibold text-zinc-800 transition-colors hover:bg-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-600',
        type === 'primary' &&
          'bg-orange-500 text-white hover:bg-orange-400 dark:hover:bg-orange-400',
        type === 'danger' && 'text-red-500 dark:text-red-500',
        size === 'small' && 'p-1.5',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
