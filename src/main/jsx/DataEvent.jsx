import React from 'react';

function Event({ event }) {
  return (
    <div className="Event">
      name : {event.name}
    </div>
  );
}

export default function DataEvent({ events }) {
  return (
    <div className="Events">
      {
        events.map( (event) => {
          return <Event event={event} />;
        })
      }
    </div>
  );
}
