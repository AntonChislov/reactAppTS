import React from "react";
import styles from './DialogsPage.module.css'
import {DialogBlock} from "./DialogBlock/DialogBlock";
import {DialogsList} from "./DialogsList/DialogsList";
import {DialogsPageDataType, DialogType, MessageType} from "../../../redux/state";
import {DialogBlockContainer} from "./DialogBlock/DialogBlockContainer";
import {DialogsListContainer} from './DialogsList/DialogsListContainer';


function DialogsPage() {
    return (
        <div className={styles.dialogsPage}>
            <DialogBlockContainer/>
            <DialogsListContainer/>
        </div>
    )
}

export {DialogsPage}