import { createRef, ElementRef } from 'react';

const editorRef = createRef<ElementRef<'textarea'>>();

export const useTextarea = () => {
  console.log('refresh');
  return { editorRef };
};
