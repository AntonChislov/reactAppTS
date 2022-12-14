import React from "react";
import styles from './Profile.module.css'
import {MyPosts} from "../MyPosts/MyPosts";
import {AddPost} from "../AddPost/AddPost";

export const Profile = () => {
    return (
        <div className={styles.profile_block}>
            <div className={styles.profile}>
                <div className={styles.profile_title}>
                    Мой профиль
                </div>
                <div>
                    Информация о себе
                </div>
                <div>
                    Информация
                </div>
            </div>
            <AddPost/>
            <MyPosts/>
        </div>
    )
}