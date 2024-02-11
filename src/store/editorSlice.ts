import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialEditorContent } from './initialData';

export interface EditorSelection {
  start: number;
  end: number;
  selectedText: string;
  textBefore: string;
  textAfter: string;
  selectedLine: number;
}

export interface SetSelectionPayload {
  selectionStart: number;
  selectionEnd: number;
}

export interface EditorState {
  content: string;
  selection: EditorSelection | null;
}

const initialState: EditorState = {
  content: initialEditorContent,
  selection: null,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setContent: (state, { payload }: PayloadAction<string>) => {
      state.content = payload;
    },
    setSelection: (state, { payload }: PayloadAction<SetSelectionPayload>) => {
      const { selectionEnd, selectionStart } = payload;

      const selection: EditorSelection = {
        start: selectionStart,
        end: selectionEnd,
        selectedText: state.content.substring(selectionStart, selectionEnd),
        textBefore: state.content.substring(0, selectionStart),
        textAfter: state.content.substring(selectionEnd, state.content.length),
        selectedLine: state.content.substring(0, selectionStart).split('\n')
          .length,
      };

      state.selection = selection;
    },
  },
});

export const { setContent, setSelection } = editorSlice.actions;

export default editorSlice.reducer;
