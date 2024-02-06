import {
  IconBold,
  IconCode,
  IconItalic,
  IconStrikethrough,
} from '@tabler/icons-react';

import { TextFormatType } from '@/utils/textFormat';

export interface TextFormat {
  type: TextFormatType;
  icon: React.ReactNode;
  tooltip?: string;
}

export const textFormat: TextFormat[] = [
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
