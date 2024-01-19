'use client';

import { Roboto_Mono } from 'next/font/google';

import { useEditorContext } from '../context/EditorContext';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function TextArea() {
  const { editorRef, editorState, handleEditorStateChange } =
    useEditorContext();

  return (
    <textarea
      value={editorState}
      onChange={(event) => handleEditorStateChange(event.target.value)}
      ref={editorRef}
      style={robotoMono.style}
      className="h-full w-2/4 resize-none bg-transparent p-2"
    />
  );
}
