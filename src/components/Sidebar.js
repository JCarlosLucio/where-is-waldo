import React from 'react';
import FindList from './FindList';
import seedFindItems from '../seedFindItems';

function Sidebar() {
  return (
    <div>
      <h1>Where is Waldo?</h1>
      {seedFindItems.map((list) => <FindList {...list} key={list.id} />)}
    </div>
  );
}

export default Sidebar;
