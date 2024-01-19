import { Selection } from './selection';

export enum Command {
  FORMAT_TEXT = 'format-text',
}

export enum TextFormatType {
  BOLD = 'bold',
  CODE = 'code',
  ITALIC = 'italic',
  STRIKETHROUGH = 'strikethrough',
}

export type OperationType = 'add' | 'removeInside' | 'removeOutside';

export const textFormatConfig = {
  [TextFormatType.BOLD]: {
    mark: '**',
  },
  [TextFormatType.CODE]: {
    mark: '`',
  },
  [TextFormatType.ITALIC]: {
    mark: '*',
  },
  [TextFormatType.STRIKETHROUGH]: {
    mark: '~~',
  },
};

export const textFormatAction = (
  selection: Selection,
  operationType: OperationType,
  type: TextFormatType,
) => {
  const { selectedText, textBefore, textAfter } = selection;
  const mark = textFormatConfig[type].mark;

  switch (operationType) {
    case 'add':
      return {
        text: `${textBefore}${mark}${selectedText}${mark}${textAfter}`,
        start: textBefore.length + mark.length,
        end: textBefore.length + mark.length + selectedText.length,
      };
    case 'removeInside': {
      const newSelectedText = selectedText.slice(
        mark.length,
        selectedText.length - mark.length,
      );
      return {
        text: `${textBefore}${newSelectedText}${textAfter}`,
        start: textBefore.length,
        end: textBefore.length + newSelectedText.length,
      };
    }
    case 'removeOutside': {
      const newTextBefore = textBefore.slice(
        0,
        textBefore.length - mark.length,
      );
      const newTextAfter = textAfter.slice(mark.length);
      return {
        text: `${newTextBefore}${selectedText}${newTextAfter}`,
        start: newTextBefore.length,
        end: newTextBefore.length + selectedText.length,
      };
    }
    default:
      return {
        text: `${textBefore}${selectedText}${textAfter}`,
        start: textBefore.length,
        end: textBefore.length + selectedText.length,
      };
  }
};

export const operationType = (
  seletion: Selection,
  type: TextFormatType,
): OperationType => {
  const { textAfter, textBefore, selectedText } = seletion;
  const mark = textFormatConfig[type].mark;

  if (selectedText.startsWith(mark) && selectedText.endsWith(mark)) {
    return 'removeInside';
  }

  if (textBefore.endsWith(mark) && textAfter.startsWith(mark)) {
    return 'removeOutside';
  }

  return 'add';
};
