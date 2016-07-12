import React from 'react';

export default class EventFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.props.onChangeFilter({name:value});
    this.setState({value:value});
  }

  render() {
    return (
      <div className="eventFilter">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange} />
      </div>
    );
  }
}
