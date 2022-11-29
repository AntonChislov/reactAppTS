import React from "react";
import styles from './Friends.module.css'

export function Friends() {
    return (
        <div className={styles.friends_block}>
            <div>
                <div className={styles.friends_title}>
                Друзья
                </div>
                <div>Оля</div>
                <div>Лена</div>
                <div>Вова</div>
                <div>Аркадий</div>
            </div>
        </div>
    )
}