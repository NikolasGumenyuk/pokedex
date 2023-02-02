import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './UserSlice';

const rootReducer = combineReducers({
  userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
