import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to="/" className={({ isactive }) => isactive ? classes.active : undefined}
                    // style={({ isactive }) => ({ textAlign: isactive ? 'center' : 'right', })}
                    >home</NavLink></li>
                    <li> <NavLink to="/product" className={({ isactive }) => isactive ? classes.active : undefined}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;