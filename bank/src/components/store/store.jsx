import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice'; 
import userInfo from '../reducers/userInfo'; 

const rootReducer = combineReducers({
  user: userReducer, 
  info: userInfo
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
