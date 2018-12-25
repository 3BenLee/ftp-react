import { combineReducers } from 'redux';
import calculateDefaultZonesReducer from './calculateDefaultZonesReducer';
import setFTPReducer from './setFTPReducer';

export default combineReducers({
  defaultZones: calculateDefaultZonesReducer,
  threshold: setFTPReducer
})