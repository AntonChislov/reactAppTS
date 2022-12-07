import React from "react";
import styles from './ProfilePage.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsBlock} from "./PostsBlock/PostsBlock";
import {PostsType} from "../../../state";

interface ProfilePagePropsType {
    postsData: Array<PostsType>
}

function ProfilePage({postsData}: ProfilePagePropsType) {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo/>
            <PostsBlock postsData={postsData}/>
        </div>
    )
}

export {ProfilePage}