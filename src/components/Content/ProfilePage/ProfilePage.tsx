import React from "react";
import styles from './ProfilePage.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsBlock} from "./PostsBlock/PostsBlock";
import {PostsType} from "../../../index";

interface ProfilePagePropsType {
    postsData: Array<PostsType>
}

export const ProfilePage: React.FC<ProfilePagePropsType> = ({postsData}) => {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo/>
            <PostsBlock postsData={postsData}/>
        </div>
    )
}