
import React from 'react';
import { User } from '../../models/user.model';
import { Table } from '../Table/Table';
import { useUsersQuery } from '../../redux/services/usersApi';

export interface UserDataProps {
  users: User[];
}

export const UserDataComponent = () => {
  const { data, isFetching, isSuccess, isError } = useUsersQuery();
  const usersList = (data && isSuccess) ? data : null;

  return (
    <div>
      {usersList && usersList.map((user) => {
       
          return <Table user={user} />
        })
      }
    </div>
  );
};
