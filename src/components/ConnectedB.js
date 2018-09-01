import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPlayerToTeam }  from '../actions';

const mapStateToProps = (state, ownProps) => ({
  team: state.team
})

const mapDispatchToProps = (dispatch) => ({
  addPlayerToTeam: player => dispatch(addPlayerToTeam(player))
})

class ConnectedB extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  addPlayerToTeam = () => {
    const player = 'cenas';
    console.log('addPlayerToTeam called!')

    this.props.addPlayerToTeam(player);
  }
  
  render() {
    console.log('CONNECTED_B RENDERED')

    return (
      <div>
        <button onClick={this.addPlayerToTeam}>Add Player to team</button>
        {
          this.props.team.map((player, index) =>
            <p key={index}>{player}</p>
          )
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedB);