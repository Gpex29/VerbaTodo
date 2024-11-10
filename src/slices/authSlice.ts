import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Logger {
  username: string,
  password: string
}

const user = JSON.parse(sessionStorage.getItem('user') || '{}');

const initialState = {
  loggedIn: !!sessionStorage.getItem('user'),
  username: user.username || null,
  password: user.password || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: {
      reducer(state, action: PayloadAction<Logger>) {
        const { payload } = action;
        console.log(payload)
        sessionStorage.setItem('user', JSON.stringify(payload));
        state.loggedIn = true;
        state.username = payload.username;
        state.password = payload.password;
      },
      prepare({ username, password }) {
        return { payload: { username, password } }
      }
    }
  },
});

export const { logIn } = authSlice.actions;
export default authSlice.reducer;
