'use client';

import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { useEditorContext } from '../context/EditorContext';

export default function CustomMarkdown() {
  const { editorState } = useEditorContext();

  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      className="markdown h-full w-2/4 overflow-auto p-2"
    >
      {editorState}
    </Markdown>
  );
}
