import React from "react";
import styles from './ProfilePage.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsBlock} from "./PostsBlock/PostsBlock";

export const ProfilePage = () => {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo/>
            <PostsBlock/>
        </div>
    )
}