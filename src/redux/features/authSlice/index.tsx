import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = 'http://localhost:5000/api';

interface UserState {
  isAuthenticated: boolean;
  loading: boolean;
  user: any; // Replace 'any' with the type of your user data
  token: string | null;
  error: string | null;
}

// Define the initial state
const initialState: UserState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  token: null,
  error: null,
};

// Define an API service using createApi
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ['authApi'],
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
      })
    }),
    forgotPassword: builder.mutation({
      query: (formData) => ({
        url: '/forgot-password',
        method: 'POST',
        body: formData,
      })
    }),
    resetPassword: builder.mutation({
      query: (formData) => ({
        url: '/reset-password',
        method: 'POST',
        body: formData,
      })
    }),
  })
});




// Export slice actions and reducer
export const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('authApi/executeMutation/fulfilled', (state, action) => {
           console.log('fullfiled');
      state.error = null;
    });
    builder.addMatcher(
      (action) => action.type.endsWith('/fulfilled'), // Match all fulfilled actions
      (state, action) => {
        // if (action.type === useLoginUserMutation.fulfilled.toString()) {
          state.loading = false;
          state.isAuthenticated = true;
        console.log('fullfiled');
        // }
      }
    );
      // .addMatcher(authApi.endpoints.loginUser.matchRejected, (state, action) => {
      //   state.loading = false;
      //   // state.error = action.error.message;
      //   // console.log(action.error.message);
      // })
  }
});

// Export generated hooks for each API endpoint
export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
export const userAuth = (state: { userAuth: any; }) => state.userAuth;
export default authSlice.reducer;
