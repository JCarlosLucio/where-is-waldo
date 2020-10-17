import React from 'react';
import FindList from './FindList';
import seedFindItems from '../seedFindItems';

function Sidebar() {
  return (
    <div>
      <h1>Where is Waldo?</h1>
      <FindList />
    </div>
  );
}

export default Sidebar;
