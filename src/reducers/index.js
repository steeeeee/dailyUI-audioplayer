import { combineReducers } from 'redux';
import albumReducer from './reducer_album';
import trackReducer from './reducer_tracks';

const rootReducer = combineReducers({
  albums: albumReducer,
  tracks: trackReducer,
});


export default rootReducer;
