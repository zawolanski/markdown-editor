import { useCallback, useEffect, useState } from 'react';

import { useEditorContext } from '@/context/EditorContext';
import { listFormatActionShortcut } from '@/utils/listFormat';
import { getEditorSelection, selectText } from '@/utils/selection';
import {
  Command,
  operationType,
  textFormatAction,
  TextFormatType,
} from '@/utils/textFormat';

export const useEditor = () => {
  const [newSelection, setNewSelection] = useState<{
    start: number;
    end: number;
  } | null>(null);
  const { editorRef, handleEditorStateChange, editorState } =
    useEditorContext();

  const dispatchCommand = useCallback(
    (command: Command, payload: TextFormatType) => {
      if (!editorRef.current) return null;

      if (command === Command.FORMAT_TEXT) {
        const selection = getEditorSelection(editorRef.current);
        const { text, start, end } = textFormatAction(
          selection,
          operationType(selection, payload),
          payload,
        );

        handleEditorStateChange(text);
        setNewSelection({ end, start });
      }
    },
    [editorRef, handleEditorStateChange],
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

      setNewSelection({ end, start });
      return text;
    },
    [editorRef],
  );

  useEffect(() => {
    if (editorRef.current && newSelection !== null) {
      selectText(editorRef.current, newSelection.start, newSelection.end);
      setNewSelection(null);
    }
  }, [editorRef, editorState]);

  return { dispatchCommand, onEditorStateChange };
};
