import React    from 'react';
import ReactDOM from 'react-dom';

import DataEvent from './DataEvent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events : [
        {name : 'event name 01'},
        {name : 'abcdef'},
        {name : 'abcdef name'},
        {name : 'abcdef name 02'},
        {name : 'event name 03'}
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      events : event.target.events
    });
  }
  render() {
    return (
      <DataEvent events={this.state.events} />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
