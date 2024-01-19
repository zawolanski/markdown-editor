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
      className="rounded-md p-2 text-slate-800 transition-colors hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
