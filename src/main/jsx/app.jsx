const React    = require('react');
const ReactDOM = require('react-dom');

const Hi = React.createClass({
  render : function () {
    return (
      <div>Hi {this.props.name}</div>
    );
  }
});

ReactDOM.render(
  <Hi name="Sample" />,
  document.getElementById('container')
);
