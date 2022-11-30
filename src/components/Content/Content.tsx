import React from "react";
import styles from './Content.module.css'
import {ProfilePage} from "./ProfilePage/ProfilePage";
import {DialogsPage} from "./DialogsPage/DialogsPage";

export const Content = () => {
    return (
        <div className={styles.content}>
            <ProfilePage/>
            {/*<DialogsPage/>*/}
        </div>
    )
}