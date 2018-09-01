/*

UNCONNECTED PARENT
CONNECTED CHILDREN

*/

import React, { Component } from 'react';

import ConnectedA from './ConnectedA';
import ConnectedB from './ConnectedB';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    console.log('UNCONNECTED CONTAINER RENDERED');

    return (
      <div>
        <ConnectedA />
        <ConnectedB />
      </div>
    );
  }
}

export default Container;