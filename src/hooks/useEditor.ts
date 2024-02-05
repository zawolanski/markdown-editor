import { useCallback, useEffect, useState } from 'react';

import { useEditorContext } from '@/context/EditorContext';
import { Command } from '@/utils/common';
import { linkFormatAction, linkFormatClipboard } from '@/utils/linkFormat';
import { listFormatActionShortcut } from '@/utils/listFormat';
import { getEditorSelection, selectText } from '@/utils/selection';
import {
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
    (command: Command, payload: TextFormatType | null) => {
      if (!editorRef.current) return null;
      const selection = getEditorSelection(editorRef.current);

      if (command === Command.FORMAT_TEXT && payload !== null) {
        const { text, start, end } = textFormatAction(
          selection,
          operationType(selection, payload),
          payload,
        );

        handleEditorStateChange(text);
        setNewSelection({ end, start });
      } else if (command === Command.LINK) {
        const { text, start, end } = linkFormatAction(selection);

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

  const onPasteEvent = useCallback(
    (e: ClipboardEvent) => {
      const data = e.clipboardData?.getData('text/plain');
      if (!editorRef.current || !data) return null;
      const selection = getEditorSelection(editorRef.current);
      const link = linkFormatClipboard(selection, data);

      if (link === null) return null;
      e.preventDefault();
      const { text, end, start } = link;
      handleEditorStateChange(text);
      setNewSelection({ end, start });
    },
    [editorRef, handleEditorStateChange],
  );

  useEffect(() => {
    if (editorRef.current && newSelection !== null) {
      selectText(editorRef.current, newSelection.start, newSelection.end);
      setNewSelection(null);
    }
  }, [editorRef, editorState]);

  return { dispatchCommand, onEditorStateChange, onPasteEvent };
};
