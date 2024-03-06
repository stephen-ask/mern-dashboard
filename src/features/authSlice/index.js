import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = 'http://localhost:5000/api';

// Define the initial state
const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  token: null,
};

// Define an API service using createApi
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (formData) => ({
        url: '/login',
        method: 'POST',
        body: formData,
      }),
    }),
    registerUser: builder.mutation({
      query: (formData) => ({
        url: '/register',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

// Export generated hooks for each API endpoint
export const { useLoginUserMutation, useRegisterUserMutation } = authApi;

// Export slice actions and reducer
export const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.util.isPending, (state) => {
        state.loading = true;
      })
      .addMatcher(authApi.util.isFulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addMatcher(authApi.util.isRejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default authSlice.reducer;
