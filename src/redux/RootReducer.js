import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import VenueDetailReducer from './reducers/VenueDetailReducer';

const rootReducer = combineReducers({
   AuthReducer,
   VenueDetailReducer,
});
export default rootReducer;