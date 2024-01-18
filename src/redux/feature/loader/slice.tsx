import {createSlice} from '@reduxjs/toolkit';

interface LoaderState {
  isLoading: boolean;
}

const initialState: LoaderState = {
  isLoading: false,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loadingStart: state => {
      state.isLoading = true;
    },
    loadingEnd: state => {
      state.isLoading = false;
    },
    // setMessage: (state, action: PayloadAction<string>) => {
    //     state.message = action.payload;
    //   },
  },
});

export const {loadingStart, loadingEnd} = loaderSlice.actions;

export default loaderSlice.reducer;
