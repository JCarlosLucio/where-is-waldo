import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GameImage from './components/GameImage';
import seedItemList from './seedItemList';

function App() {
  const [list, setList] = useState(seedItemList);

  const toggleFound = (id) => {
    const updatedItems = list.map((item) => {
      if (item.id === id) {
        return { ...item, found: true };
      }
      return item;
    });
    setList(updatedItems);
  };

  return (
    <div>
      <Sidebar list={list} />
      {/* where is waldo type image goes here */}
      <GameImage />
    </div>
  );
}

export default App;
