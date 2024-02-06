'use client';

import { IconCopy } from '@tabler/icons-react';
import { Roboto_Mono } from 'next/font/google';

import { useEditorContext } from '../context/EditorContext';
import Button from './Button';
import MarkdownSectionWrapper from './MarkdownSectionWrapper';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function TextArea() {
  const { editorRef, editorState, handleEditorStateChange } =
    useEditorContext();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(editorState);
  };

  return (
    <MarkdownSectionWrapper
      label="markdown"
      hasBorder
      topBarElements={
        <Button size="small" onClick={copyToClipboard}>
          <IconCopy size="18" />
        </Button>
      }
    >
      <textarea
        value={editorState}
        onChange={(event) => handleEditorStateChange(event.target.value)}
        ref={editorRef}
        style={robotoMono.style}
        className="h-full resize-none bg-transparent p-2"
      />
    </MarkdownSectionWrapper>
  );
}
