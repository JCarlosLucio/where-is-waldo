import React from 'react';
import FindList from './FindList';

function Sidebar({ findLists }) {
  return (
    <div>
      <h1>Where is Waldo?</h1>
      {findLists.map((list) => <FindList {...list} key={list.id} />)}
    </div>
  );
}

export default Sidebar;
