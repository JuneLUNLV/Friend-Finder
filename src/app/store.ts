import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import navBarReducer from '../components/NavBarSlice';
import peopleReucer from '../components/PeopleSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navBar: navBarReducer,
    people: peopleReucer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
