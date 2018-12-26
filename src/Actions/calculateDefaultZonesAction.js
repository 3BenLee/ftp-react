import { CALCULATE_DEFAULT_ZONES } from './types';

export const calculateDefaultZones = (FTP) => dispatch => {
  console.log('CalcDefaultZones Actions');
  dispatch({
    type: CALCULATE_DEFAULT_ZONES,
    payload: FTP
  }) 
}