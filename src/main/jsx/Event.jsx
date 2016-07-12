import React from 'react';

export default function Event({ event }) {
  return (
    <div className="eventNode">
      name : {event.name}
    </div>
  );
}
