import React from 'react';
import FindList from './FindList';

function DropdownMenu({ list }) {
  return (
    <div>
      <FindList
        difficulty="easy"
        items={list.filter((item) => item.difficulty === 'easy')}
      />
      <FindList
        difficulty="medium"
        items={list.filter((item) => item.difficulty === 'medium')}
      />
      <FindList
        difficulty="hard"
        items={list.filter((item) => item.difficulty === 'hard')}
      />
    </div>
  );
}

export default DropdownMenu;
