import { configureStore } from '@reduxjs/toolkit';

import errorsReducer from '../slices/errorsSlice';
import activityListReducer from '../slices/activityListSlice';

const store = configureStore({
  reducer: { errors: errorsReducer, activityList: activityListReducer },
});

export default store;
