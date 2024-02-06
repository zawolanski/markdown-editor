'use client';

import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { useEditorContext } from '../context/EditorContext';
import MarkdownSectionWrapper from './MarkdownSectionWrapper';

export default function CustomMarkdown() {
  const { editorState } = useEditorContext();

  return (
    <MarkdownSectionWrapper label="preview">
      <Markdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        className="markdown h-full overflow-auto p-2"
      >
        {editorState}
      </Markdown>
    </MarkdownSectionWrapper>
  );
}
