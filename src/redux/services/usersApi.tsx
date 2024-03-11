import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../models/user.model';

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints:(builder) => ({
        users: builder.query<User[], void>({ // Assuming User is the type/interface of your user object
            query: () => ({
                url: '/users',
                method: 'GET',
                responseHandler: (response) => response.json()
            }),
            transformResponse: (rawResult: { users: User[] }) => {
                return rawResult.users;
            },
        }),
        user: builder.query<User, string>({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'GET',
                responseHandler: (response) => response.json()
            }),
            transformResponse: (rawResult: { user: User }) => {
                return rawResult.user;
            },
        }),
        loginUser: builder.mutation<User, string>({
            query: () => ({
                url: `/login/`,
                method: 'POST',
                responseHandler: (response) => response.json()
            }),
            transformResponse: (rawResult: {
                    msg: User | Promise<User>; 
                }) => {
                return rawResult.msg;
            },
        })
    })
})

export const { useUsersQuery, useUserQuery } = usersApi;