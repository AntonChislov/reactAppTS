import React from "react";
import styles from './MyPosts.module.css';
import {Post} from "../Post/Post";

export const MyPosts = () => {
    return (
        <div>

        <div className={styles.posts_block}>
            <div className={styles.posts_block_title}>
            Мои посты
            </div>
            <Post message={'привет'}/>
            <Post message={'как дела?'}/>
        </div>
        </div>
    )
}