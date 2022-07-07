import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Person } from '../types/Person';

export interface PeopleState {
  peopleClickedId: string,
  peopleList : Array<Person>,
  peopleClickedList: Array<string>,
  lastVisitedOpen: boolean
}

const initialState: PeopleState = {
    peopleClickedId: '',
    peopleList: [],
    peopleClickedList: [],
    lastVisitedOpen: false

};


export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPeopleClickedId: (state, action: PayloadAction<string>) => {
      state.peopleClickedId = action.payload;
    },
    appendPeopleList: (state, action: PayloadAction<Array<Person>>) => {
      state.peopleList = state.peopleList.concat(action.payload);
    },
    appendPeopleClickedList: (state, action: PayloadAction<string>) => {
      state.peopleClickedList.push(action.payload)
    },
    setLastVisitedOpen: (state, action: PayloadAction<boolean>) => {
      state.lastVisitedOpen = action.payload;
    },
  },
});

export const { setPeopleClickedId,appendPeopleList,appendPeopleClickedList,setLastVisitedOpen } = peopleSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPeopleClickedId = (state: RootState) => state.people.peopleClickedId;
export const selectPeopleList = (state: RootState) => state.people.peopleList;
export const selectPeopleClickedList = (state: RootState) => state.people.peopleClickedList;
export const selectlastVisitedOpen = (state: RootState) => state.people.lastVisitedOpen;

export default peopleSlice.reducer;
