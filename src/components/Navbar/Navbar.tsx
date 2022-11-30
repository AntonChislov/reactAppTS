import React from "react";
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_block}>
                <div><NavLink to='/'>Профиль</NavLink></div>
                <div><NavLink to='dialogs'>Сообщения</NavLink></div>
                <div><NavLink to='friends'>Друзья</NavLink></div>
                <div><NavLink to='news'>Новости</NavLink></div>
                <div><NavLink to='music'>Музыка</NavLink></div>
                <div><NavLink to='settings'>Настройки</NavLink></div>
            </div>
        </div>
    )
}

