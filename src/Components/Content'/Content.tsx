import React from "react";
import styles from './Content.module.css'
import {Friends} from "../Friends/Friends";
import {Subscriptions} from "../Subscriptions/Subscriptions";
import {Profile} from "../Profile/Profile";

export function Content() {
    return (
        <div className={styles.content}>
            <Profile/>
            <Friends/>
            <Subscriptions/>
        </div>
    )
}