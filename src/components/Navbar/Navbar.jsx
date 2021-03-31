import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={s.item}>
                <div className={s.friends}>
                    <h3>Friends</h3>
                </div>
                    <div className={s.avaFriends}>
                        <NavLink to="/friends" ClassName={s.friends}>Andrey</NavLink>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7N0tN8gs2aqKdCxboBvUfzRVgqKLYT7pIw&usqp=CAU' />
                    </div>
                    <div className={s.avaFriends}>
                        <NavLink to="/friends" ClassName={s.friends}>Dmitry</NavLink>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7N0tN8gs2aqKdCxboBvUfzRVgqKLYT7pIw&usqp=CAU' />
                    </div>
                    <div className={s.avaFriends}>
                        <NavLink to="/friends" ClassName={s.friends}>Roman</NavLink>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7N0tN8gs2aqKdCxboBvUfzRVgqKLYT7pIw&usqp=CAU' />
                    </div>
            </div>
        </nav>
    )
}

export default Navbar;