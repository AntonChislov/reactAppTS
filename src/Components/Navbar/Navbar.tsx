import React from "react";
import styles from './Navbar.module.css';

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <div><a className={styles.item}>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>Friends</a></div>
            <div><a>Music</a></div>
        </div>
    )
}