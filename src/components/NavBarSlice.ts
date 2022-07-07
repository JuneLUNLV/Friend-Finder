import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface NavBarState {
  searchBarValue: string;
}

const initialState: NavBarState = {
    searchBarValue: '',
};


export const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSearchBarValue: (state, action: PayloadAction<string>) => {
      state.searchBarValue = action.payload;
    },
  },
});

export const { setSearchBarValue } = navBarSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectNavBarSearchValue = (state: RootState) => state.navBar.searchBarValue;

export default navBarSlice.reducer;
