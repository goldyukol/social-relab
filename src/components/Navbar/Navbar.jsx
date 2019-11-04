import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar';



const Navbar = (props) => {

    let friendsElement = props.state.friends.map((f) => <Sidebar friend={f.friend} id={f.id} />)

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div className={s.friends}>
            <div className={s.friendsLink}>
                <NavLink to=''>Friends</NavLink>
            </div>
            {friendsElement}
        </div>
    </nav>
}

export default Navbar;