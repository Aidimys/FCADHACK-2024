import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import addId from '../../utils/addId.js';
import { setHomeError, clearHomeError } from './errorsSlice.js';

const initialState = {
  students: [],
  isLoading: false,
};
const fetchStudents = createAsyncThunk(
  'studentsList/fetchStudents',
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
const studentsListSlice = createSlice({
  initialState,
  name: 'studentsList',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchStudents.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.isLoading = false;

      action.payload.forEach(item => {
        state.students.push(addId(item));
      });
    });
    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const selectorStudentsList = state => state.studentsList.students;
export const selectorIsLoading = state => state.studentsList.isLoading;

export { fetchStudents };
export default studentsListSlice.reducer;
