import React from 'react';

import EventFilter from './EventFilter.jsx';
import EventList   from './EventList.jsx';

export default class EventView extends React.Component {
  constructor(props) {
    super(props);
    this.data  = props.data;
    this.state = {
      events : this.data.events
    };
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  handleChangeFilter(filter) {
    const name   = filter.name.trim();
    const events = this.data.events.filter((event) => {
      return event.name.match('.*'+name+'.*');
    });
    this.setState({
      events : events
    });
  }

  render() {
    return (
      <div className="eventView">
        <EventFilter onChangeFilter={this.handleChangeFilter} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}
