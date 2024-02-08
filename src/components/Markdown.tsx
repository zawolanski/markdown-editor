'use client';

import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { useEditorContext } from '../context/EditorContext';
import { H1, H2, H3, H4, H5, H6 } from './MarkdownComponents/Heading';
import MarkdownSectionWrapper from './MarkdownSectionWrapper';

export default function CustomMarkdown() {
  const { editorState } = useEditorContext();

  return (
    <MarkdownSectionWrapper label="preview">
      <Markdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        className="markdown h-full overflow-auto p-2"
        components={{
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
        }}
      >
        {editorState}
      </Markdown>
    </MarkdownSectionWrapper>
  );
}
