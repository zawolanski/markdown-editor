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
  const [editorState, setEditorState] = useState<string>(initialEditorState);

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

const initialEditorState = `# Example

\`<p>Inline code</p>\`

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

- List item 1
- List item 2
- List item 3
- List item 4
- List item 5

Link: [Google](https://www.google.com/).

Table:
| Syntax | Description |
| ----------- | ----------- |
| Paragraph | Text |
| Paragraph | Text |
| Paragraph | Text |
| Paragraph | Text |
| Paragraph | Text |

****

\`\`\`
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Document</title>
</head>
<body>
  <p>Code block</p>
</body>
</html>
\`\`\`

****

> Quote line 1
Quote line 2
Quote line 3
Quote line 4
Quote line 5

****

Lorem ipsum dolor sit **amet**, consectetur adipiscing elit. Maecenas ac turpis vitae dolor commodo semper. Morbi rutrum nisl ut lorem eleifend rutrum. *Curabitur* hendrerit mi in enim semper, venenatis placerat libero molestie. Nulla ultrices neque feugiat diam tempor, et vehicula mauris semper. Duis a eros rhoncus, semper magna nec, pretium leo. Donec sagittis eget quam quis faucibus. Aliquam et fermentum magna.

Aenean eu ante nunc. Sed a mattis dolor. Maecenas sit amet elit ornare, vulputate elit et, dapibus odio. Ut **lobortis** viverra turpis, quis placerat quam consectetur eu. Maecenas feugiat aliquet nisl \`vitae\` rutrum. Pellentesque auctor ac turpis vulputate consequat. Phasellus porta, dolor ut ornare auctor, est turpis congue libero, vel mollis mauris turpis aliquet diam. Morbi ut nisl quis mauris ultrices mattis ac vel mi. Fusce condimentum tortor risus, et rhoncus lacus ~~gravida~~ vel.
`;
