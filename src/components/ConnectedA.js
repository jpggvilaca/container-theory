import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeValue }  from '../actions';

const mapStateToProps = (state, ownProps) => ({
  score: state.score
})

const mapDispatchToProps = (dispatch) => ({
  changeValue: value => dispatch(changeValue(value))
})

class ConnectedA extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  changeValue = () => {
    const value = Math.floor(Math.random() * 10);
    console.log('changeValue called!')

    this.props.changeValue(value);
  }
  
  render() {
    console.log('CONNECTED_A RENDERED')

    return (
      <div>
        <button onClick={this.changeValue}>Change Value</button>
        <p>{this.props.score}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedA);