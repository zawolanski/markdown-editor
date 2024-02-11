'use client';

import { Tooltip as ReactTooltip } from 'react-tooltip';

interface Props {
  children: React.ReactNode;
  label: string;
}

const Tooltip = ({ children, label }: Props) => (
  <>
    <a data-tooltip-id={`custom-tooltip-${label}`} data-tooltip-content={label}>
      {children}
    </a>
    <ReactTooltip
      id={`custom-tooltip-${label}`}
      className="!rounded-md !bg-zinc-400 !px-2 !py-0.5"
      noArrow
      place="bottom"
      offset={5}
    />
  </>
);

export default Tooltip;
