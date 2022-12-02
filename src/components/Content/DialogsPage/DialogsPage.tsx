import React from "react";
import styles from './DialogsPage.module.css'
import {DialogBlock} from "./DialogBlock/DialogBlock";
import {DialogsList} from "./DialogsList/DialogsList";

export const DialogsPage = () => {
    return (
        <div className={styles.dialogsPage}>
            <DialogBlock/>
            <DialogsList/>
        </div>
    )
}