import React    from 'react';
import ReactDOM from 'react-dom';

import ItemList from './ItemList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [
        { name : 'name 01' },
        { name : 'name 02' }
      ]
    };
  }
  render() {
    return (
      <ItemList items={this.state.items} />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
