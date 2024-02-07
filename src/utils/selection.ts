export interface Selection {
  start: number;
  end: number;
  selectedText: string;
  fullText: string;
  textBefore: string;
  textAfter: string;
  selectedLine: number;
}

export const getEditorSelection = (
  editorRef: HTMLTextAreaElement,
): Selection => {
  const selectionStart = editorRef.selectionStart;
  const selectionEnd = editorRef.selectionEnd;

  return {
    start: selectionStart,
    end: selectionEnd,
    selectedText: editorRef.value.substring(selectionStart, selectionEnd),
    fullText: editorRef.value,
    textBefore: editorRef.value.substring(0, selectionStart),
    textAfter: editorRef.value.substring(selectionEnd, editorRef.value.length),
    selectedLine: editorRef.value.substring(0, selectionStart).split('\n')
      .length,
  };
};

export const getLengthTextInLines = (lines: string[], selectedLine: number) => {
  return lines
    .slice(0, selectedLine - 1)
    .reduce((acc, line) => acc + line.length + 1, 0);
};

export const selectText = (
  editorRef: HTMLTextAreaElement,
  start: number,
  end: number,
) => {
  editorRef.setSelectionRange(start, end);
  editorRef.focus();
};
