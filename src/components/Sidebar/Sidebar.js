import { dashboardRoutes } from '../../routes/routes';
import './sidebar.css';
import {  Link } from 'react-router-dom';
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo"></div>  
        <div className="" >
          {
            dashboardRoutes.map((route, index) => (
              <li key={index}>
                <Link to={route.path}>
                  {route.path === '/' ? 'Home' : 'Users'}
                </Link>
              </li>
            ))
          }
        </div>
      </div>  
    </div>
  );
}