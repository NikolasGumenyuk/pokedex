import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface UserState {
  firstName: string;
  lastName: string;
  isAuth: boolean;
}

export const initialState: UserState = {
  firstName: '',
  lastName: '',
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
