import { IconList } from '@tabler/icons-react';

import Button from '../Button';

export default function List() {
  return (
    <>
      <Button onClick={() => console.log('unordered list!')}>
        <IconList />
      </Button>
    </>
  );
}
