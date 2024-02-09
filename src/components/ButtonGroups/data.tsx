import {
  IconBold,
  IconCode,
  IconH1,
  IconH2,
  IconH3,
  IconItalic,
  IconStrikethrough,
} from '@tabler/icons-react';

import { HeadingType } from '@/utils/headingFormat';
import { TextFormatType } from '@/utils/textFormat';

export interface Format<T> {
  type: T;
  icon: React.ReactNode;
  tooltip?: string;
}

export const headingFormat: Format<HeadingType>[] = [
  {
    type: HeadingType.H1,
    icon: <IconH1 />,
    tooltip: 'Heading 1',
  },
  {
    type: HeadingType.H2,
    icon: <IconH2 />,
    tooltip: 'Heading 2',
  },
  {
    type: HeadingType.H3,
    icon: <IconH3 />,
    tooltip: 'Heading 3',
  },
];

export const textFormat: Format<TextFormatType>[] = [
  {
    type: TextFormatType.BOLD,
    icon: <IconBold />,
    tooltip: 'Bold',
  },
  {
    type: TextFormatType.CODE,
    icon: <IconCode />,
    tooltip: 'Code',
  },
  {
    type: TextFormatType.ITALIC,
    icon: <IconItalic />,
    tooltip: 'Italic',
  },
  {
    type: TextFormatType.STRIKETHROUGH,
    icon: <IconStrikethrough />,
    tooltip: 'Strikethrough',
  },
];
