import ActionButtons from './ButtonGroups/ActionButtons';
import Divider from './Divider';
import HeaderTrailingButtons from './HeaderTrailingButtons';

const Header = () => (
  <header className="flex items-center justify-between bg-zinc-100 p-3 dark:bg-zinc-700">
    <div className="flex h-full items-center">
      <h1 className="mx-1 h-fit font-bold uppercase tracking-[0.5rem] text-zinc-800 dark:text-zinc-200">
        markdown
      </h1>
      <Divider />
      <ActionButtons />
    </div>
    <HeaderTrailingButtons />
  </header>
);

export default Header;
