import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './todosSlice.js';
import authReducer from './authSlice.js';

const rootReducer = combineReducers({
  todos: todoReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
  },
});