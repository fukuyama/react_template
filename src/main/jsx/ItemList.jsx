import React from 'react';

function ItemNode({ item }) {
  return (
    <div className="item">
      name : {item.name}
    </div>
  );
}

export default function ItemList({ items }) {
  return (
    <div className="itemList">
      {
        items.map( (item) => {
          return <ItemNode item={item} />;
        })
      }
    </div>
  );
}
