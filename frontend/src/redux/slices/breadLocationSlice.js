import { createSlice } from '@reduxjs/toolkit';

const initialState = [''];
const breadLocationSlice = createSlice({
  initialState,
  name: 'breadLocation',
  reducers: {
    setbreadLocation: (state, action) => {
      if (action.payload === '/') {
        return [''];
      }
      return action.payload.split('/');
    },
  },
});
export const { setbreadLocation } = breadLocationSlice.actions;
export const selectorBreadLocation = state => state.breadLocation;
export default breadLocationSlice.reducer;
