import React from "react";
import styles from './Friends.module.css'
import {Subscriptions} from "../Subscriptions/Subscriptions";

export function Friends() {
    return (
        <div>
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
            <Subscriptions/>
        </div>
    )
}