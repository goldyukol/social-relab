import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://s2.logaster.com/static/v3/img/products/logo.png' alt='text'></img>
        <div className={s.auth}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'} className={s.login}>
                    login</NavLink>}
        </div>
    </header >
}

export default Header;