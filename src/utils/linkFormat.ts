import { FormatReturnObject } from './common';
import { Selection } from './selection';

const LINK_REGEXP = /^(\[.*\]\(.*\))$/;
const URL_REGEXP =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/i;

const getLink = (label = '', url = 'url') => `[${label}](${url})`;
const getLinkLabel = (link: string) => link.slice(1, link.indexOf(']'));
const getLinkUrl = (link: string) =>
  link.slice(link.indexOf('(') + 1, link.length - 1);

export const linkFormatAction = (selection: Selection): FormatReturnObject => {
  const { selectedText, textBefore, textAfter } = selection;

  const link = selectedText.match(LINK_REGEXP);

  if (link) {
    const linkLabel = getLinkLabel(link[0]);

    return {
      text: `${textBefore}${linkLabel}${textAfter}`,
      start: textBefore.length,
      end: textBefore.length + linkLabel.length,
    };
  } else {
    const newStr = getLink(selectedText);
    const linkLabel = getLinkLabel(newStr);
    const linkUrl = getLinkUrl(newStr);

    let start = 0;
    let end = 0;

    // Place cursor between []
    if (selectedText.length === 0) {
      start = textBefore.length + 1;
      end = textBefore.length + 1;
    }
    // Select the 'url' string in the parentheses
    else {
      start = textBefore.length + linkLabel.length + 3;
      end = textBefore.length + linkLabel.length + 3 + linkUrl.length;
    }

    return {
      text: `${textBefore}${newStr}${textAfter}`,
      start,
      end,
    };
  }
};

export const linkFormatClipboard = (selection: Selection, data: string) => {
  const { selectedText, textBefore, textAfter } = selection;
  if (
    URL_REGEXP.test(data) &&
    selectedText.length > 0 &&
    selectedText.toLocaleLowerCase() !== 'url'
  ) {
    const newStr = getLink(selectedText, data);

    return {
      text: `${textBefore}${newStr}${textAfter}`,
      start: textBefore.length + newStr.length,
      end: textBefore.length + newStr.length,
    };
  }

  return null;
};
