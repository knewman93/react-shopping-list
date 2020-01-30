import React, { Component } from 'react';

class Units extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault(); //would cause the browser to reload, which make us lose all of our date 
    this.props.addItem(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter An Item"
        />
      </form>
    );
  }
}

export default Units;