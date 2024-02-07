import { FormatReturnObject } from './common';
import { getLengthTextInLines, Selection } from './selection';

export enum HeadingType {
  H1 = 1,
  H2,
  H3,
  H4,
  H5,
  H6,
}

export interface HeadingFormatPayload {
  headingType: HeadingType;
}

const headingRegExp = {
  [HeadingType.H1]: /^# /,
  [HeadingType.H2]: /^## /,
  [HeadingType.H3]: /^### /,
  [HeadingType.H4]: /^#### /,
  [HeadingType.H5]: /^##### /,
  [HeadingType.H6]: /^###### /,
};

const HEADING_MARK = '#';

export const headingFormatAction = (
  selection: Selection,
  { headingType }: HeadingFormatPayload,
): FormatReturnObject => {
  const {
    selectedText,
    textBefore,
    textAfter,
    end,
    start,
    selectedLine,
    fullText,
  } = selection;
  const lines = fullText.split('\n');
  const line = lines[selectedLine - 1];
  const heading = HEADING_MARK.repeat(headingType);
  const lengthOfTextBefore = getLengthTextInLines(lines, selectedLine);
  const newTextBefore = textBefore.slice(0, lengthOfTextBefore);
  const headingLength = heading.length + 1;

  if (headingRegExp[headingType].test(line)) {
    const newStr = `${line.slice(headingLength, start - lengthOfTextBefore)}${selectedText}`;

    return {
      text: `${newTextBefore}${newStr}${textAfter}`,
      start: start - headingLength,
      end: end - headingLength,
    };
  }

  const newStr = `${heading} ${line.slice(0, start - lengthOfTextBefore)}${selectedText}`;

  return {
    text: `${newTextBefore}${newStr}${textAfter}`,
    start: start + headingLength,
    end: end + headingLength,
  };
};
