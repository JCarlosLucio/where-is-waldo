import React from 'react';

function FindItem({ name, franchise }) {
  return (
    <div>
      {/* character image goes here */}
      {/* conditional style w/found prop */}
      <h2>{name}</h2>
      <h5>{franchise}</h5>
    </div>
  );
}

export default FindItem;
