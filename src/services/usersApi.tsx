import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../models/user.model';

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints:(builder) => ({
        users: builder.query<User[], void>({
            query: () => '/users'
        }),
        user: builder.query<User, string>({
            query: (id) => `/users/${id}`
        })
    })
})

export const { useUsersQuery, useUserQuery } = usersApi;