import { SET_FTP } from './types';

export const setFTP = (thresholdPower) => dispatch => {
  console.log('GetFTP Action');
  dispatch({
    type: SET_FTP,
    payload: thresholdPower
  }) 
}