import { clsx } from 'clsx/lite';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  label: string;
  hasBorder?: boolean;
  topBarElements?: ReactNode;
}

const MarkdownSectionWrapper = ({
  children,
  label,
  hasBorder,
  topBarElements,
}: Props) => {
  return (
    <div
      className={clsx(
        'flex shrink grow basis-1/2 flex-col overflow-auto',
        hasBorder && 'border-r-[1px] border-zinc-500 dark:border-zinc-400',
      )}
    >
      <div className="flex h-11 items-center justify-between bg-zinc-200 pl-3 pr-1.5 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
        <p className="text-xs font-semibold uppercase tracking-widest">
          {label}
        </p>
        {topBarElements}
      </div>
      {children}
    </div>
  );
};

export default MarkdownSectionWrapper;
