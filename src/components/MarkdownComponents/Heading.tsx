import clsx from 'clsx/lite';
import { Components } from 'react-markdown';

const common = 'my-6 font-bold leading-8 tracking-wide';

export const H1: Components['h1'] = ({ children }) => (
  <h1 className={clsx(common, 'text-3xl')}>{children}</h1>
);

export const H2: Components['h2'] = ({ children }) => (
  <h1 className={clsx(common, 'text-2xl')}>{children}</h1>
);

export const H3: Components['h3'] = ({ children }) => (
  <h1 className={clsx(common, 'text-xl')}>{children}</h1>
);

export const H4: Components['h4'] = ({ children }) => (
  <h1 className={clsx(common, 'text-lg')}>{children}</h1>
);

export const H5: Components['h5'] = ({ children }) => (
  <h1 className={clsx(common, 'text-base')}>{children}</h1>
);

export const H6: Components['h6'] = ({ children }) => (
  <h1 className={clsx(common, 'text-sm text-zinc-600 dark:text-zinc-400')}>
    {children}
  </h1>
);
