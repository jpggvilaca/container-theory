// constants
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const ADD_PLAYER_TO_TEAM = 'ADD_PLAYER_TO_TEAM';

// actions
export const changeValue = value => ({
  type: CHANGE_VALUE, value
});

export const addPlayerToTeam = player => ({
  type: ADD_PLAYER_TO_TEAM, player
});