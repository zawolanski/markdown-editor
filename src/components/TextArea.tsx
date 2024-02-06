'use client';

import { Roboto_Mono } from 'next/font/google';

import { useEditorContext } from '../context/EditorContext';
import MarkdownSectionWrapper from './MarkdownSectionWrapper';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function TextArea() {
  const { editorRef, editorState, handleEditorStateChange } =
    useEditorContext();

  return (
    <MarkdownSectionWrapper label="markdown" hasBorder>
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
