import React, { Component } from 'react';

class B extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    console.log('B RENDERED')
    console.log(this.props.team)
    
    return (
      <div>
        {
          this.props.team.map((player, index) =>
            <p key={index}>{player}</p>
          )
        }
      </div>
    );
  }
}

export default B;