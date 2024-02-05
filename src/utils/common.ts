export enum Command {
  FORMAT_TEXT = 'format-text',
  LINK = 'link',
}

export interface FormatReturnObject {
  text: string;
  start: number;
  end: number;
}
