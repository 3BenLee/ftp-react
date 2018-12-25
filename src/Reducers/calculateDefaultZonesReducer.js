import { CALCULATE_DEFAULT_ZONES } from '../Actions/types';

const initialState = {
  zones: [],
  zonePercentages: [.55, .75, .90, 1.05, 1.2],
  FTP: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
      case CALCULATE_DEFAULT_ZONES:
        console.log("Default reducer", action.payload)
        return {
          ...state,
          // zones: state.zonePercentages.map(index => Math.round(index * state.FTP))
        }
    default:
      return state;
  }
}

