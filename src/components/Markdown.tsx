'use client';

import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { RootState } from '@/store/store';

import { H1, H2, H3, H4, H5, H6 } from './MarkdownComponents/Heading';

const Markdown = () => {
  const content = useSelector((state: RootState) => state.editor.content);

  return (
    <ReactMarkdown
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
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
