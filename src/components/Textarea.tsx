'use client';

import { Roboto_Mono } from 'next/font/google';
import { ChangeEvent, SyntheticEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useEditorContext } from '@/context/EditorContext';
import { useEditor } from '@/hooks/useEditor';
import { setContent, setSelection } from '@/store/editorSlice';
import { RootState } from '@/store/store';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

const Textarea = () => {
  const dispatch = useDispatch();
  const content = useSelector((state: RootState) => state.editor.content);
  const { onEditorStateChange, onPasteEvent } = useEditor();
  const { editorRef } = useEditorContext();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(setContent(event.target.value));
    },
    [dispatch],
  );

  const handleSelect = useCallback(
    (event: SyntheticEvent<HTMLTextAreaElement>) => {
      const target = event.target as HTMLTextAreaElement;
      const selectionStart = target?.selectionStart;
      const selectionEnd = target?.selectionEnd;

      if (selectionStart && selectionEnd) {
        dispatch(setSelection({ selectionEnd, selectionStart }));
      }
    },
    [dispatch],
  );

  const keyDown = useCallback(
    (e: KeyboardEvent) => {
      const target = e.target as HTMLTextAreaElement;
      if (target?.value && e.key === 'Enter') {
        onEditorStateChange(e);
      }
    },
    [onEditorStateChange],
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
  }, [editorRef, keyDown, pasteEvent]);

  return (
    <textarea
      value={content}
      onChange={(event) => handleChange(event)}
      onSelect={(event) => handleSelect(event)}
      ref={editorRef}
      style={robotoMono.style}
      className="h-full resize-none bg-transparent p-2"
    />
  );
};

export default Textarea;
