'use client';

import { IconLink } from '@tabler/icons-react';

import Button from '@/components/Button';
import { useEditor } from '@/hooks/useEditor';
import { Command } from '@/utils/common';

import Divider from '../Divider';
import { headingFormat, textFormat } from './data';

export const ActionButtons = () => {
  const { dispatchCommand } = useEditor();

  return (
    <div className="flex h-full items-center gap-1">
      {headingFormat.map(({ icon, type, tooltip }) => (
        <Button
          key={type}
          onClick={() => dispatchCommand(Command.HEADING, type)}
          tooltip={tooltip}
        >
          {icon}
        </Button>
      ))}
      <Divider />
      {textFormat.map(({ icon, type, tooltip }) => (
        <Button
          key={type}
          onClick={() => dispatchCommand(Command.FORMAT_TEXT, type)}
          tooltip={tooltip}
        >
          {icon}
        </Button>
      ))}
      <Button
        onClick={() => dispatchCommand(Command.LINK, null)}
        tooltip="Link"
      >
        <IconLink />
      </Button>
    </div>
  );
};

export default ActionButtons;
