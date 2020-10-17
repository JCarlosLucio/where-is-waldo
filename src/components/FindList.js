import React from 'react';
import FindItem from './FindItem';

function FindList({ difficulty, items }) {
  return (
    <div>
      <h1>{difficulty}</h1>
      {items.map((item) => <FindItem {...item} key={item.id} />)}
    </div>
  );
}

export default FindList;
