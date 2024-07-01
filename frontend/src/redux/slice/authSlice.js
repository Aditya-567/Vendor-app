import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginAPI } from '../../services/users/userService';

export const loginAction = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginAPI(credentials);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: 'Network error' });
      }
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('userInfo');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        localStorage.setItem('userInfo', JSON.stringify(payload));
      })
      .addCase(loginAction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.message || 'Something went wrong';
      });
  },
});

export const { logout: logoutAction } = authSlice.actions;
export default authSlice.reducer;
