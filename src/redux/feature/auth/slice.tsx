import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {handleLogin} from './index';
import {showToast} from '@utils/helpers';

interface AuthState {
  isLoggedIn: boolean;
  error: string | null;
  token: string;
  userDetails: Record<string, unknown>;
}

const initialState: AuthState = {
  isLoggedIn: false,
  error: null,
  token: '',
  userDetails: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogout: state => {
      state = initialState;
      return state;
    },
  },

  extraReducers: builder => {
    builder.addCase(handleLogin.pending, state => {
      state.error = null;
    });
    builder.addCase(
      handleLogin.fulfilled,
      (state, action: PayloadAction<{token: string}>) => {
        state.token = action.payload.token;
        state.error = null;
        state.isLoggedIn = true;
        showToast({type: 'success', message: 'Success'});
      },
    );
    builder.addCase(
      handleLogin.rejected,
      (state, action: PayloadAction<{error: string}>) => {
        state.error = action.payload.error;
        showToast({type: 'error', message: 'Error'});
      },
    );
  },
});

export const {handleLogout} = authSlice.actions;

export default authSlice.reducer;
