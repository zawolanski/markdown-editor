import { Selection } from './selection';

const UNORDERED_LIST_INDICATOR = '-';
const UNORDERED_LIST_ADD_MASK = /^- /;
const UNORDERED_LIST_REMOVE_MASK = /^- $/;

export const listFormatActionShortcut = (
  selection: Selection,
  editorValue: string,
  event: KeyboardEvent,
) => {
  const { textAfter, textBefore, selectedLine, start, end } = selection;
  const lines = editorValue.split('\n');
  const prevLine = lines[selectedLine - 1];

  // Unordered List - previous list element is empty, should be removed
  if (prevLine.trimStart().match(UNORDERED_LIST_REMOVE_MASK)) {
    event.preventDefault();
    const indentation = prevLine.slice(
      0,
      prevLine.indexOf(UNORDERED_LIST_INDICATOR),
    );
    const newStr = `${indentation}${UNORDERED_LIST_INDICATOR} `;
    return {
      start: start - newStr.length,
      end: end - newStr.length,
      text: `${textBefore.slice(0, textBefore.length - 1 - newStr.length)}\n${textAfter}`,
    };
  }

  // Unordered List - previous list element is not empty, should be kept
  if (prevLine.trimStart().match(UNORDERED_LIST_ADD_MASK)) {
    event.preventDefault();
    const indentation = prevLine.slice(
      0,
      prevLine.indexOf(UNORDERED_LIST_INDICATOR),
    );
    const newStr = `\n${indentation}${UNORDERED_LIST_INDICATOR} `;
    return {
      start: `${textBefore}${newStr}`.length,
      end: `${textBefore}${newStr}`.length,
      text: `${textBefore}${newStr}${textAfter}`,
    };
  }

  return null;
};
