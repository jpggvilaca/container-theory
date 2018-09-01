import React, { Component } from 'react';

class A extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    console.log('A RENDERED')

    return (
      <p>{this.props.score}</p>
    );
  }
}

export default A;