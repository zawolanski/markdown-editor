import {
  IconBold,
  IconCode,
  IconItalic,
  IconStrikethrough,
} from '@tabler/icons-react';

import { TextFormatType } from '@/utils/textFormat';

export interface General {
  type: TextFormatType;
  icon: React.ReactNode;
}

export const general: General[] = [
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
