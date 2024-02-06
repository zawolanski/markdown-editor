'use client';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const { children, onClick } = props;

  return (
    <button
      type="button"
      className="rounded-md p-2 text-zinc-800 transition-colors hover:bg-zinc-200 dark:text-zinc-200 dark:hover:bg-zinc-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
