import { createSlice } from '@reduxjs/toolkit';

import { IUser } from 'models/IUser';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state) {},
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
