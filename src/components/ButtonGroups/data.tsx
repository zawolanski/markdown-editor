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
}

export const textFormat: TextFormat[] = [
  {
    type: TextFormatType.BOLD,
    icon: <IconBold />,
  },
  {
    type: TextFormatType.CODE,
    icon: <IconCode />,
  },
  {
    type: TextFormatType.ITALIC,
    icon: <IconItalic />,
  },
  {
    type: TextFormatType.STRIKETHROUGH,
    icon: <IconStrikethrough />,
  },
];
