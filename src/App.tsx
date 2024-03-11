import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/layouts/Layout';
import { UserDataComponent } from './components/UserListing/'
import { useRoutes } from "react-router-dom";
import { Dashboard } from './pages/Dashboard/Dashbaord';
import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
import { useDispatch, useSelector } from'react-redux';

function App() {
 
  const routes = useRoutes([
      {
        path: "/",
        children: [
          {
            path: "/",
            element: <UserDataComponent />,
          },
          {
            path: "login",
            element: <Login />,
          },
          
        ],
      }
    ]);

  return (
    <Layout>
      {routes}
    </Layout>
  );
}




export default App;
