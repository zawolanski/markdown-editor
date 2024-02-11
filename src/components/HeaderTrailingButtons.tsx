'use client';

import { IconTrash } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';

import { setContent } from '@/store/editorSlice';

import Button from './Button';

const ThemeButton = dynamic(
  () => import('@/components/CustomButtons/ThemeButton'),
  { ssr: false },
);

const HeaderTrailingButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1">
      <Button
        onClick={() => dispatch(setContent(''))}
        type="danger"
        tooltip="Clear markdown"
      >
        <IconTrash />
      </Button>
      <ThemeButton />
    </div>
  );
};

export default HeaderTrailingButtons;
