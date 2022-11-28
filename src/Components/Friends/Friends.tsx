import React from "react";
import styles from './Friends.module.css'

export function Friends() {
    return (
        <div className={styles.friends_block}>
            <div>
                <div className={styles.friends_header}>
                Friends
                </div>
                <div>Adna</div>
                <div>Mikle</div>
                <div>Leo</div>
                <div>Muchachos</div>
            </div>
        </div>
    )
}