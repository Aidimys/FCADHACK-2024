import { configureStore } from '@reduxjs/toolkit';

import errorsReducer from '../slices/errorsSlice';
import activityListReducer from '../slices/activityListSlice';
import breadLocationReducer from '../slices/breadLocationSlice';
import studentsListReducer from '../slices/studentsListSlice';
//import isMainLoadedReducer from '../slices/isMainLoadedSlice';

const store = configureStore({
  reducer: {
    errors: errorsReducer,
    activityList: activityListReducer,
    breadLocation: breadLocationReducer,
    studentsList: studentsListReducer,
    //isMainLoaded: isMainLoadedReducer,
  },
});

export default store;
