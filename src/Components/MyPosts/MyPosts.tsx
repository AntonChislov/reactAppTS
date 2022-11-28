import React from "react";
import styles from './MyPosts.module.css';
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div className={styles.profile_block}>
            MyPosts
            <Post/>
        </div>
    )
}