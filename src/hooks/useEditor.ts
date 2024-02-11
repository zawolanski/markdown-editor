'use client';

import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useEditorContext } from '@/context/EditorContext';
import { setContent } from '@/store/editorSlice';
import { RootState } from '@/store/store';
import { linkFormatClipboard } from '@/utils/linkFormat';
import { listFormatActionShortcut } from '@/utils/listFormat';
import { getEditorSelection, selectText } from '@/utils/selection';

import { handleCommand } from './helpers';
import { DispatchCommand, NewSelection } from './types';

export const useEditor = () => {
  const [newSelection, setNewSelection] = useState<NewSelection | null>(null);
  const { editorRef } = useEditorContext();

  const content = useSelector((state: RootState) => state.editor.content);
  const dispatch = useDispatch();

  const handleSelection = useCallback((newSelection: NewSelection | null) => {
    setNewSelection(newSelection);
  }, []);

  const dispatchCommand = useCallback<DispatchCommand>(
    (command, payload) => {
      if (!editorRef.current) return null;
      const selection = getEditorSelection(editorRef.current);

      const newEntry = handleCommand(command, payload, selection);
      if (newEntry) {
        const { text, start, end } = newEntry;
        dispatch(setContent(text));
        handleSelection({ end, start });
      }
    },
    [editorRef, dispatch, handleSelection],
  );

  const onEditorStateChange = useCallback(
    (e: KeyboardEvent) => {
      if (!editorRef.current) return null;

      const data = listFormatActionShortcut(
        getEditorSelection(editorRef.current),
        editorRef.current.value,
        e,
      );

      if (data === null) return null;
      const { text, end, start } = data;
      handleSelection({ end, start });
      return text;
    },
    [editorRef, handleSelection],
  );

  const onPasteEvent = useCallback(
    (e: ClipboardEvent) => {
      const data = e.clipboardData?.getData('text/plain');
      if (!editorRef.current || !data) return null;
      const selection = getEditorSelection(editorRef.current);
      const link = linkFormatClipboard(selection, data);

      if (link === null) return null;
      e.preventDefault();
      const { text, end, start } = link;
      dispatch(setContent(text));
      handleSelection({ end, start });
    },
    [dispatch, editorRef, handleSelection],
  );

  useEffect(() => {
    if (editorRef.current && newSelection !== null) {
      selectText(editorRef.current, newSelection.start, newSelection.end);
      handleSelection(null);
    }
  }, [editorRef, content, handleSelection, newSelection]);

  return { dispatchCommand, onEditorStateChange, onPasteEvent };
};
