import React from "react";
import styles from './ProfilePage.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsBlock} from "./PostsBlock/PostsBlock";
import {ProfilePageDataType} from "../../../redux/state";

interface ProfilePagePropsType {
    profilePageData: ProfilePageDataType
    dispatch: (action: any) => void
}

function ProfilePage({profilePageData, dispatch}: ProfilePagePropsType) {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo/>
            <PostsBlock profilePageData={profilePageData}
                        dispatch={dispatch}/>
        </div>
    )
}

export {ProfilePage}