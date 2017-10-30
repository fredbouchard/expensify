import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <h1 className="header-title">Expensify</h1>
        <NavLink 
            className="header-link"
            activeClassName="is-active"
            to="/" exact={true}>Dashboard
        </NavLink>
        <NavLink
            className="header-link"
            activeClassName="is-active"
            to="/create">Create
        </NavLink>
        <NavLink
            className="header-link"
            activeClassName="is-active"
            to="/help">Help
        </NavLink>
    </header>
);

export default Header;
