import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice'; 
import userInfoReducer from '../reducers/userInfo'; 

const rootReducer = combineReducers({
  user: userReducer, 
  userInfo: userInfoReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
