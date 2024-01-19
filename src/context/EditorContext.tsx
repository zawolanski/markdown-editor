'use client';

import {
  createContext,
  createRef,
  RefObject,
  useCallback,
  useContext,
  useState,
} from 'react';

interface EditorContextProps {
  editorRef: RefObject<HTMLTextAreaElement>;
  editorState: string;
  handleEditorStateChange: (editorState: string) => void;
}

const editorRef = createRef<HTMLTextAreaElement>();

const initialState: EditorContextProps = {
  editorRef: editorRef,
  editorState: '',
  handleEditorStateChange: () => {},
};

const EditorContext = createContext<EditorContextProps>(initialState);

interface EditorProviderProps {
  children: React.ReactNode;
}

export const EditorContextProvider = ({ children }: EditorProviderProps) => {
  const [editorState, setEditorState] = useState<string>('');

  const handleEditorStateChange = useCallback((newEditorState: string) => {
    setEditorState(newEditorState);
  }, []);

  return (
    <EditorContext.Provider
      value={{ editorRef, editorState, handleEditorStateChange }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
