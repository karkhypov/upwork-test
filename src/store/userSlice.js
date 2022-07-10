import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: 'upworkTest',
    password: '2022',
  },
  isLogged: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    signIn: (state, action) => {
      const { name, password } = action.payload;

      if (state.user.name !== name || state.user.password !== password) {
        state.error = 'Wrong password or username, please try again';
        return;
      }

      state.error = null;
      state.isLogged = true;
    },
    signOut: (state) => {
      state.isLogged = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
