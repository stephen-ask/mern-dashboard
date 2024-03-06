import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layouts/Layout';
import {useUsersQuery} from './services/usersApi';

function App() {
  const {data, error, isLoading, isFetching, isSuccess } = useUsersQuery();
 
  return (
    <div className="App">
     <Layout> 
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      { isSuccess &&  (
          <div>{
              data.map(user => (
                <div key={user.id}>
                  <h2>{user.username}</h2>
                  <p>{user.email}</p>
                </div>
              ))
            }</div>
        )
      } </Layout>
    </div>
  );
}

export default App;
