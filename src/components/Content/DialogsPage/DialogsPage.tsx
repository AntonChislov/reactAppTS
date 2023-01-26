import React from "react";
import styles from './DialogsPage.module.css'
import {DialogBlock} from "./DialogBlock/DialogBlock";
import {DialogsList} from "./DialogsList/DialogsList";
import {DialogsPageDataType, DialogType, MessageType} from "../../../redux/state";
import {DialogBlockContainer} from "./DialogBlock/DialogBlockContainer";

interface DialogsPagePropsType {
    dialogsPageData: DialogsPageDataType
}

function DialogsPage({dialogsPageData}: DialogsPagePropsType) {
    return (
        <div className={styles.dialogsPage}>
            <DialogBlockContainer/>
            <DialogsList dialogsData={dialogsPageData.dialogsData}/>
        </div>
    )
}

export {DialogsPage}