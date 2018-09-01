/*

CONNECTED PARENT
UNCONNECTED CHILDREN

1 - SUBSCRIBES TO ALL THE STATE
2 - TESTING CHANGES IN STATE WITH ONE OR MULTIPLE VARIABLES FROM THE STATE

*/

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeValue, addPlayerToTeam }  from '../actions';

import A from './A';
import B from './B';

const mapStateToProps = (state, ownProps) => ({
  score: state.score,
  team: state.team
})

const mapDispatchToProps = (dispatch) => ({
  changeValue: value => dispatch(changeValue(value)),
  addPlayerToTeam: player => dispatch(addPlayerToTeam(player))
})

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  changeValue = () => {
    const value = Math.floor(Math.random() * 10);
    console.log('changeValue called!')

    this.props.changeValue(value);
  }

  addPlayerToTeam = () => {
    const player = 'cenas';
    console.log('addPlayerToTeam called!')

    this.props.addPlayerToTeam(player);
  }

  render() {
    console.log('CONNECTED COMPONENT RENDERED')

    return (
      <div>
        <button onClick={this.changeValue}>Change Value</button>
        <button onClick={this.addPlayerToTeam}>Add Player to team</button>
        <A score={this.props.score} />
        <B team={this.props.team} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);