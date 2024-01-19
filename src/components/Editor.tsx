'use client';

import { useCallback, useEffect } from 'react';

import { useEditor } from '@/hooks/useEditor';

import { useEditorContext } from '../context/EditorContext';
import Markdown from './Markdown';
import TextArea from './TextArea';

export default function Editor() {
  const { editorState, editorRef, handleEditorStateChange } =
    useEditorContext();
  const { onEditorStateChange } = useEditor();

  const keyDown = useCallback(
    (e: KeyboardEvent) => {
      const target = e.target as HTMLTextAreaElement;

      if (target?.value && e.key === 'Enter') {
        const text = onEditorStateChange(e);
        if (text) handleEditorStateChange(text);
      }
    },
    [onEditorStateChange, handleEditorStateChange],
  );

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.addEventListener('keydown', keyDown);
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.removeEventListener('keydown', keyDown);
      }
    };
  }, [editorRef, editorState, keyDown]);

  return (
    <>
      <TextArea />
      <div className="w-[2px] bg-slate-200 dark:bg-slate-800" />
      <Markdown />
    </>
  );
}
