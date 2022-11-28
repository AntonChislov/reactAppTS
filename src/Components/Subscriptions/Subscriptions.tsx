import React from "react";
import styles from './Subscriptions.module.css'

export function Subscriptions() {
    return (
        <div className={styles.subscriptions_block}>
            <div className={styles.subscriptions_header}>
                Subscriptions
            </div>
            <div>Channel 1</div>
            <div>Channel 2</div>
            <div>Channel 3</div>
            <div>Channel 4</div>
        </div>
    )
}