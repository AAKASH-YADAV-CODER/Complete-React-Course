import React, { useContext } from 'react';
import AuthenContext from '../contextstore/AuthenContext';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const cntxt = useContext(AuthenContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {cntxt.isloggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cntxt.isloggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cntxt.isloggedIn && (
          <li>
            <button onClick={cntxt.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
};

export default Navigation;
