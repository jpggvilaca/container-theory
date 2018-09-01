import { CHANGE_VALUE, ADD_PLAYER_TO_TEAM } from './actions';

const initialState = {
  score: 0,
  team: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        score: action.value
      }
    case ADD_PLAYER_TO_TEAM:
      return {
        ...state,
        team: [...state.team, action.player]
      }
    default:
      return state;
  }
}

export default rootReducer;