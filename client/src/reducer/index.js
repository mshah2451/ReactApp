import {combineReducers} from 'redux';

import authReducer from './authReducer';
import UpdateProfile from'./UpdateProfile';
export default combineReducers({
    auth:authReducer,
    updateProfile:UpdateProfile
});