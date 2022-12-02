import React from "react";
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_block}>
                <div><NavLink style={({isActive}) => ({color: isActive ? 'red' : ''})} to='/'>Профиль</NavLink></div>
                <div><NavLink style={({isActive}) => ({color: isActive ? 'red' : ''})} to='dialogs'>Сообщения</NavLink></div>
                <div><NavLink style={({isActive}) => ({color: isActive ? 'red' : ''})} to='friends'>Друзья</NavLink></div>
                <div><NavLink style={({isActive}) => ({color: isActive ? 'red' : ''})} to='news'>Новости</NavLink></div>
                <div><NavLink style={({isActive}) => ({color: isActive ? 'red' : ''})} to='music'>Музыка</NavLink></div>
                <div><NavLink style={({isActive}) => ({color: isActive ? 'red' : ''})} to='settings'>Настройки</NavLink></div>
            </div>
        </div>
    )
}