import { configureStore } from '@reduxjs/toolkit'
// import userAuthReducer  from './features/authSlice'
import { usersApi } from './services/usersApi';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer
    
  },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
  
});


export const RootState = store.getState();
export const AppDispatch = store.dispatch;