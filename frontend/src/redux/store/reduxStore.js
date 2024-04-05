import { configureStore } from '@reduxjs/toolkit';

import errorsReducer from '../slices/errorsSlice';
import activityListReducer from '../slices/activityListSlice';
//import isMainLoadedReducer from '../slices/isMainLoadedSlice';

const store = configureStore({
  reducer: {
    errors: errorsReducer,
    activityList: activityListReducer,
    //isMainLoaded: isMainLoadedReducer,
  },
});

export default store;
