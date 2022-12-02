import React from "react";
import styles from './Content.module.css'
import {Routes, Route} from "react-router-dom";
import {ProfilePage} from "./ProfilePage/ProfilePage";
import {DialogsPage} from "./DialogsPage/DialogsPage";

export const Content = () => {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path='/' element={<ProfilePage/>} />
                <Route path='dialogs' element={<DialogsPage/>} />
            </Routes>
        </div>
    )
}