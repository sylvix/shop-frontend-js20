import { User, ValidationError } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { register } from './usersThunk';

interface UsersState {
  user: User | null;
  registerLoading: boolean;
  registerError: ValidationError | null;
}

const initialState: UsersState = {
  user: null,
  registerLoading: false,
  registerError: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.registerLoading = true;
      state.registerError = null;
    });
    builder.addCase(register.fulfilled, (state, {payload: data}) => {
      state.registerLoading = false;
      state.user = data.user;
    });
    builder.addCase(register.rejected, (state, {payload: error}) => {
      state.registerLoading = false;
      state.registerError = error || null;
    });
  }
});

export const usersReducer = usersSlice.reducer;

export const selectorUser = (state: RootState) => state.users.user;
export const selectorRegisterLoading = (state: RootState) => state.users.registerLoading;
export const selectorRegisterError = (state: RootState) => state.users.registerError;
