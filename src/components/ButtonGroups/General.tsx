import { useCallback } from 'react';

import Button from '@/components/Button';
import { useEditor } from '@/hooks/useEditor';
import { Command, TextFormatType } from '@/utils/textFormat';

import { general } from './data';

export default function GeneralButtons() {
  const { dispatchCommand } = useEditor();

  const handleOnClick = useCallback(
    (formatType: TextFormatType) => {
      dispatchCommand(Command.FORMAT_TEXT, formatType);
    },
    [dispatchCommand],
  );

  return general.map(({ icon, type }) => (
    <Button key={type} onClick={() => handleOnClick(type)}>
      {icon}
    </Button>
  ));
}
