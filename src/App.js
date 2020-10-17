import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import seedFindItems from './seedFindItems';

function App() {
  const [lists, setLists] = useState(seedFindItems);

  return (
    <div>
      <Sidebar findLists={lists} />
      {/* where is waldo type image goes here */}
    </div>
  );
}

export default App;
