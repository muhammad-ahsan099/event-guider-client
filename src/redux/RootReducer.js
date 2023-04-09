import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';

const rootReducer = combineReducers({
   AuthReducer,
});
export default rootReducer;