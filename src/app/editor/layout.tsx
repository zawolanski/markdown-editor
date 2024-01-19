import { EditorContextProvider } from '../../context/EditorContext';

interface EditorLayoutProps {
  children: React.ReactNode;
}

export default function EditorLayout({ children }: EditorLayoutProps) {
  return <EditorContextProvider>{children}</EditorContextProvider>;
}
