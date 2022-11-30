import React from "react";
import styles from './Navbar.module.css';


export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_block}>
                <div><a>Профиль</a></div>
                <div><a>Сообщения</a></div>
                <div><a>Друзья</a></div>
                <div><a>Новости</a></div>
                <div><a>Музыка</a></div>
                <div><a>Настройки</a></div>
            </div>
        </div>
    )
}

