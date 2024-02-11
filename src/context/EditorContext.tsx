'use client';

import { createContext, createRef, RefObject, useContext } from 'react';

interface EditorContextProps {
  editorRef: RefObject<HTMLTextAreaElement>;
}

const editorRef = createRef<HTMLTextAreaElement>();

const initialState: EditorContextProps = {
  editorRef: editorRef,
};

const EditorContext = createContext<EditorContextProps>(initialState);

interface EditorProviderProps {
  children: React.ReactNode;
}

export const EditorContextProvider = ({ children }: EditorProviderProps) => {
  return (
    <EditorContext.Provider value={{ editorRef }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
