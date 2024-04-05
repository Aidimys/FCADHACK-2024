import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeError: '',
};
const errorsSlice = createSlice({
  initialState,
  name: 'errors',
  reducers: {
    setHomeError: (state, action) => {
      state.homeError = action.payload;
    },
    clearHomeError: (state, action) => {
      state.homeError = '';
    },
  },
});

export const { setHomeError, clearHomeError } = errorsSlice.actions;
export const selectorHomeError = state => state.errors.homeError;
export default errorsSlice.reducer;
