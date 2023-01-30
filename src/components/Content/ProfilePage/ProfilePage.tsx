import React from "react";
import styles from './ProfilePage.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageDataType} from "../../../redux/state";
import {PostsBlockContainer} from "./PostsBlock/PostsBlockContainer";

export const ProfilePage = () => {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo/>
            <PostsBlockContainer/>
        </div>
    )
}