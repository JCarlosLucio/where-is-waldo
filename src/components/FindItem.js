import React from 'react';

function FindItem({ name, franchise, image }) {
  return (
    <div>
      {/* character image goes here */}
      {/* conditional style w/found prop */}
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h5>{franchise}</h5>
    </div>
  );
}

export default FindItem;
