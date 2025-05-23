import { NavLink } from 'react-router-dom';
import routes from '../../constart/routes';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to={routes.home}>MyApp</NavLink>
      </div>
      <div className="nav-links">
        <NavLink 
          to={routes.home} 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Home
        </NavLink>
        <NavLink 
          to={routes.title} 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Titles
        </NavLink>
        <NavLink 
          to={routes.realTimeType} 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Typing
        </NavLink>
        <NavLink 
          to={routes.login} 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};
