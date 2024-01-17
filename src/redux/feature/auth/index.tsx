import {createAsyncThunk} from '@reduxjs/toolkit';
import httpService from '@utils/httpService';

export const login: any = createAsyncThunk<any>(
  'login',
  async (data, {rejectWithValue}) => {
    try {
      const response = await httpService.post('/api/login', data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);
