import React from "react";
import styles from './ProfilePage.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageDataType} from "../../../redux/state";
import {PostsBlockContainer} from "./PostsBlock/PostsBlockContainer";

interface ProfilePagePropsType {
    profilePageData: ProfilePageDataType
    dispatch: (action: any) => void
}

function ProfilePage() {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo/>
            <PostsBlockContainer/>
        </div>
    )
}

export {ProfilePage}