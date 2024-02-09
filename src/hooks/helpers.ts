import { Command, CommandPayload, FormatReturnObject } from '@/utils/common';
import { headingFormatAction } from '@/utils/headingFormat';
import { linkFormatAction } from '@/utils/linkFormat';
import { Selection } from '@/utils/selection';
import { operationType, textFormatAction } from '@/utils/textFormat';

export const handleCommand = <T extends Command, U extends CommandPayload[T]>(
  command: T,
  payload: U,
  selection: Selection,
): FormatReturnObject | null => {
  switch (command) {
    case Command.FORMAT_TEXT: {
      const data = payload as CommandPayload[Command.FORMAT_TEXT];
      return textFormatAction(selection, operationType(selection, data), data);
    }
    case Command.LINK:
      return linkFormatAction(selection);
    case Command.HEADING: {
      const data = payload as CommandPayload[Command.HEADING];
      return headingFormatAction(selection, data);
    }
    default:
      return null;
  }
};
