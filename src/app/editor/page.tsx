import Editor from '@/components/Editor';
import Header from '@/components/Header';

export default function EditorPage() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex grow justify-center">
        <Editor />
      </div>
    </div>
  );
}
