import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import addId from '../../utils/addId.js';
import { setHomeError, clearHomeError } from './errorsSlice.js';

const initialState = {
  activity: [],
  isLoading: false,
};
const fetchActivity = createAsyncThunk(
  'activityList/fetchActivity',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      thunkAPI.dispatch(clearHomeError());
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setHomeError(error.message));
      throw error;
    }
  }
);
const activityListSlice = createSlice({
  initialState,
  name: 'activityList',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchActivity.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchActivity.fulfilled, (state, action) => {
      state.isLoading = false;

      action.payload.forEach(item => {
        state.activity.push(addId(item));
      });
    });
    builder.addCase(fetchActivity.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const selectorActivityList = state => state.activityList.activity;
export const selectorIsLoading = state => state.activityList.isLoading;

export { fetchActivity };
export default activityListSlice.reducer;
