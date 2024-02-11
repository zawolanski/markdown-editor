'use client';

import { IconCopy } from '@tabler/icons-react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';

import Button from '../Button';

const CopyButton = () => {
  const content = useSelector((state: RootState) => state.editor.content);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <Button size="small" onClick={copyToClipboard} tooltip="Copy">
      <IconCopy size="18" />
    </Button>
  );
};

export default CopyButton;
