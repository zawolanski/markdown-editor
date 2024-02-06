'use client';

import React, { useCallback, useEffect } from 'react';

import { useEditor } from '@/hooks/useEditor';

import { useEditorContext } from '../context/EditorContext';
import Markdown from './Markdown';
import TextArea from './TextArea';

export default function Editor() {
  const { editorState, editorRef, handleEditorStateChange } =
    useEditorContext();
  const { onEditorStateChange, onPasteEvent } = useEditor();

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

  const pasteEvent = useCallback(
    (e: ClipboardEvent) => {
      onPasteEvent(e);
    },
    [onPasteEvent],
  );

  useEffect(() => {
    let ref: HTMLTextAreaElement | null = null;

    if (editorRef.current) {
      editorRef.current.addEventListener('keydown', keyDown);
      editorRef.current.addEventListener('paste', pasteEvent);
      ref = editorRef.current;
    }

    return () => {
      if (ref) {
        ref.removeEventListener('keydown', keyDown);
        ref.removeEventListener('paste', pasteEvent);
      }
    };
  }, [editorRef, editorState, keyDown, pasteEvent]);

  return (
    <>
      <TextArea />
      <Markdown />
    </>
  );
}
