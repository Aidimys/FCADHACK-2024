import { createSlice } from '@reduxjs/toolkit';
const initialState = false;
const isMainLoadedSlice = createSlice({
  initialState,
  name: 'isMainLoaded',
  reducers: {
    setIsMainLoaded: (state, action) => !state,
  },
});
export const { setIsMainLoaded } = isMainLoadedSlice.actions;
export const selectorIsMainLoaded = state => state.isMainLoaded;
export default isMainLoadedSlice.reducer;
