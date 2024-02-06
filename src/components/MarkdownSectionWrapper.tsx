'use client';

import { clsx } from 'clsx/lite';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  label: string;
  hasBorder?: boolean;
}

export default function MarkdownSectionWrapper({
  children,
  label,
  hasBorder,
}: Props) {
  return (
    <div
      className={clsx(
        'flex shrink grow basis-1/2 flex-col overflow-auto',
        hasBorder && 'border-r-[1px] border-zinc-500 dark:border-zinc-400',
      )}
    >
      <div className="bg-zinc-200 p-3 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
        <p className="text-xs font-semibold uppercase tracking-widest">
          {label}
        </p>
      </div>
      {children}
    </div>
  );
}
