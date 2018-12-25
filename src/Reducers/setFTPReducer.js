import { SET_FTP } from '../Actions/types';

const initialState = {
  FTP: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
      case SET_FTP:
        console.log("setFTP reducer", action.payload)
        return {
          ...state,
          // zones: state.zonePercentages.map(index => Math.round(index * state.FTP))
          FTP: [...state, action.payload]
        }
    default:
      return state;
  }
}