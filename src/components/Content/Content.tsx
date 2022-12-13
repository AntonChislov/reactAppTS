import React from "react";
import styles from './Content.module.css'
import {Routes, Route} from "react-router-dom";
import {ProfilePage} from "./ProfilePage/ProfilePage";
import {DialogsPage} from "./DialogsPage/DialogsPage";
import {AppPropsType} from "../../App";

function Content(props: AppPropsType) {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path='/' element={<ProfilePage profilePageData={props.profilePageData}
                                                      dispatch={props.dispatch}/>}/>
                <Route path='dialogs/*' element={<DialogsPage dialogsPageData={props.dialogsPageData}/>}/>
            </Routes>
        </div>
    )
}

export {Content}