import { IconHeading, IconLink } from '@tabler/icons-react';
import { useCallback } from 'react';

import Button from '@/components/Button';
import { useEditor } from '@/hooks/useEditor';
import { Command, Payload } from '@/utils/common';
import { HeadingType } from '@/utils/headingFormat';

import { textFormat } from './data';

export default function ActionButtons() {
  const { dispatchCommand } = useEditor();

  const handleOnClick = useCallback(
    (commnad: Command, formatType: Payload) => {
      dispatchCommand(commnad, formatType);
    },
    [dispatchCommand],
  );

  return (
    <>
      <Button
        onClick={() =>
          handleOnClick(Command.HEADING, { headingType: HeadingType.H3 })
        }
        tooltip="Heading"
      >
        <IconHeading />
      </Button>
      {textFormat.map(({ icon, type, tooltip }) => (
        <Button
          key={type}
          onClick={() => handleOnClick(Command.FORMAT_TEXT, type)}
          tooltip={tooltip}
        >
          {icon}
        </Button>
      ))}
      <Button onClick={() => handleOnClick(Command.LINK, null)} tooltip="Link">
        <IconLink />
      </Button>
    </>
  );
}
