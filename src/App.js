import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GameImage from './components/GameImage';
import seedFindItems from './seedFindItems';

function App() {
  const [lists, setLists] = useState(seedFindItems);

  const toggleFound = (listId, itemId) => {
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          items: list.items.map((item) => {
            if (item.id === itemId) {
              return { ...item, found: true };
            }
            return item;
          }),
        };
      }
      return list;
    });
    setLists(updatedLists);
  };

  return (
    <div>
      <Sidebar findLists={lists} />
      {/* where is waldo type image goes here */}
      <GameImage />
    </div>
  );
}

export default App;
