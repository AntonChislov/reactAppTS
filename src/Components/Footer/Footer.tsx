import React from "react";
import styles from './Footer.module.css'
import {MyPosts} from "../MyPosts/MyPosts";

export function Footer() {
    return (
        <div className={styles.footer}>
            Все права защищены ёмаё
        </div>
    )
}