import React from 'react';
import FindList from './FindList';

function Sidebar({ list }) {
  return (
    <div>
      <h1>Where is Waldo?</h1>

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

export default Sidebar;
