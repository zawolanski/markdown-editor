'use client';

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useEditorContext } from '@/context/EditorContext';
import { setContent } from '@/store/editorSlice';
import { linkFormatClipboard } from '@/utils/linkFormat';
import { listFormatActionShortcut } from '@/utils/listFormat';
import { getEditorSelection, selectText } from '@/utils/selection';

import { handleCommand } from './helpers';
import { DispatchCommand } from './types';

export const useEditor = () => {
  const { editorRef } = useEditorContext();
  const dispatch = useDispatch();

  const dispatchCommand = useCallback<DispatchCommand>(
    async (command, payload) => {
      if (!editorRef.current) return null;
      const selection = getEditorSelection(editorRef.current);

      const newEntry = handleCommand(command, payload, selection);
      if (newEntry) {
        const { text, start, end } = newEntry;
        await dispatch(setContent(text));
        selectText(editorRef, start, end);
      }
    },
    [editorRef, dispatch],
  );

  const onEditorStateChange = useCallback(
    async (e: KeyboardEvent) => {
      if (!editorRef.current) return null;

      const data = listFormatActionShortcut(
        getEditorSelection(editorRef.current),
        editorRef.current.value,
        e,
      );

      if (data === null) return null;
      const { text, end, start } = data;
      await dispatch(setContent(text));
      selectText(editorRef, start, end);
    },
    [dispatch, editorRef],
  );

  const onPasteEvent = useCallback(
    async (e: ClipboardEvent) => {
      const data = e.clipboardData?.getData('text/plain');
      if (!editorRef.current || !data) return null;
      const selection = getEditorSelection(editorRef.current);
      const link = linkFormatClipboard(selection, data);

      if (link === null) return null;
      e.preventDefault();
      const { text, end, start } = link;
      await dispatch(setContent(text));
      selectText(editorRef, start, end);
    },
    [dispatch, editorRef],
  );

  return { dispatchCommand, onEditorStateChange, onPasteEvent };
};
