import { CALCULATE_DEFAULT_ZONES } from '../Actions/types';

const initialState = {
  zones: [],
  zonePercentages: [0, .55, .56, .75, .76, .90, .91, 1.05, 1.06, 1.2],
  FTP: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
      case CALCULATE_DEFAULT_ZONES:
        console.log("CalcDefaultZones reducer", action.payload, state.zones, state.FTP)
        return {
          ...state,
          zones: state.zonePercentages.map(i => Math.round(i * action.payload)),
        }
    default:
      return state;
  }
}

