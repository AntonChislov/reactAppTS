import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? "azure" : ""})} to='/'>Мой профиль</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? "azure" : ""})} to='dialogs'>Сообщения</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? "azure" : ""})} to='music'>Музыка</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? "azure" : ""})} to='news'>Новости</NavLink></div>
            <div><NavLink style={({ isActive }) => ({ color: isActive ? "azure" : ""})} to='settings'>Настройки</NavLink></div>
        </div>
    )
}