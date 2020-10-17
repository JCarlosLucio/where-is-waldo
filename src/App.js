import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GameImage from './components/GameImage';
import seedFindItems from './seedFindItems';

function App() {
  const [lists, setLists] = useState(seedFindItems);

  return (
    <div>
      <Sidebar findLists={lists} />
      {/* where is waldo type image goes here */}
      <GameImage />
    </div>
  );
}

export default App;
