import { HeadingType } from './headingFormat';
import { TextFormatType } from './textFormat';

export enum Command {
  FORMAT_TEXT = 'format-text',
  LINK = 'link',
  HEADING = 'heading',
}

export type Payload = TextFormatType | HeadingType | null;

export interface FormatReturnObject {
  text: string;
  start: number;
  end: number;
}
