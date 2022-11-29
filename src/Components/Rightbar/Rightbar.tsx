import React from "react";
import styles from './Rightbar.module.css'
import {Friends} from "../Friends/Friends";
import {Subscriptions} from "../Subscriptions/Subscriptions";

export function Rigtbar() {
    return (
        <div className={styles.rightbar_block}>
            <Friends/>
            <Subscriptions/>
        </div>
    )
}