import { IconLink } from '@tabler/icons-react';
import { useCallback } from 'react';

import Button from '@/components/Button';
import { useEditor } from '@/hooks/useEditor';
import { Command } from '@/utils/common';
import { TextFormatType } from '@/utils/textFormat';

import { textFormat } from './data';

export default function ActionButtons() {
  const { dispatchCommand } = useEditor();

  const handleOnClick = useCallback(
    (commnad: Command, formatType: TextFormatType | null) => {
      dispatchCommand(commnad, formatType);
    },
    [dispatchCommand],
  );

  return (
    <>
      {textFormat.map(({ icon, type }) => (
        <Button
          key={type}
          onClick={() => handleOnClick(Command.FORMAT_TEXT, type)}
        >
          {icon}
        </Button>
      ))}
      <Button onClick={() => handleOnClick(Command.LINK, null)}>
        <IconLink />
      </Button>
    </>
  );
}
