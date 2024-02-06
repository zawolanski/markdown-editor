'use client';

import { Tooltip } from 'react-tooltip';

interface Props {
  children: React.ReactNode;
  label: string;
}

export default function CustomTooltip({ children, label }: Props) {
  return (
    <>
      <a
        data-tooltip-id={`custom-tooltip-${label}`}
        data-tooltip-content={label}
      >
        {children}
      </a>
      <Tooltip
        id={`custom-tooltip-${label}`}
        className="!rounded-md !bg-zinc-400 !px-2 !py-0.5"
        noArrow
        place="bottom"
        offset={5}
      />
    </>
  );
}
