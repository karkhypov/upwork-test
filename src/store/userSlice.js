import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: 'upworkTest',
    password: '2022',
  },
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    signIn: (state, action) => {
      const { name, password } = action.payload;

      if (state.user.name !== name || state.user.password !== password) {
        throw new Error('Wrong password or username, please try again');
      }

      state.isLogged = true;
    },

    signOut: (state) => {
      state.isLogged = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;
