import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './services/usersApi';
import { authApi } from './features/authSlice';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware)
        .concat(authApi.middleware),
  
});


export const RootState = store.getState();
export const AppDispatch = store.dispatch;