import React from "react";
import styles from './Navbar.module.css';

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <div><a className={styles.item}>Мой профиль</a></div>
            <div><a>Сообщения</a></div>
            <div><a>Музыка</a></div>
            <div><a>Новости</a></div>
        </div>
    )
}