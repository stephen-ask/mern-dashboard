import { Route, Routes } from "react-router-dom";
import { UserDataComponent } from "../components/UserListing";
import { Dashboard } from "../pages/Dashboard/Dashbaord";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const dashboardRoutes = [
  {
    path: "/",
    children: [
      
    ],
  },
  {
    path: "/users",
    element: <UserDataComponent />,
  },
]