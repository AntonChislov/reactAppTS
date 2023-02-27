import React from "react";
import styles from './DialogsPage.module.css'
import {DialogBlockContainer} from "./DialogBlock/DialogBlockContainer";
import {DialogsListContainer} from './DialogsList/DialogsListContainer';


export function DialogsPage() {
    return (
        <div className={styles.dialogsPage}>
            <DialogsListContainer/>
            <DialogBlockContainer/>
        </div>
    )
}