import React from "react";
import styles from './Subscriptions.module.css'

export function Subscriptions() {
    return (
        <div className={styles.subscriptions_block}>
            <div className={styles.subscriptions_title}>
                Подписки
            </div>
            <div>Канал 1</div>
            <div>Канал 2</div>
            <div>Канал 3</div>
            <div>Канал 4</div>
        </div>
    )
}