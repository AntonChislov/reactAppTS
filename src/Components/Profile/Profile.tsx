import React from "react";
import styles from './Profile.module.css'
import {MyPosts} from "../MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={styles.profile}>
            <MyPosts/>
        </div>
    )
}