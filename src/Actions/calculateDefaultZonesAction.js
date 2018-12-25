import { CALCULATE_DEFAULT_ZONES } from './types';

export const calculateDefaultZones = (zones) => dispatch => {
  console.log('CalcDefaultZones Actions');
  dispatch({
    type: CALCULATE_DEFAULT_ZONES,
    payload: zones
  }) 
}