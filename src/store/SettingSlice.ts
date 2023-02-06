import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ThemeVariant } from 'models/ThemeVariant';

export interface SettingState {
  error: string;
  isLoading: boolean;
  theme: ThemeVariant;
}

const initialState: SettingState = {
  error: '',
  isLoading: false,
  theme: ThemeVariant.white,
};

const settingSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setError: (state: SettingState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoading: (state: SettingState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setError, setLoading } = settingSlice.actions;
export default settingSlice.reducer;
