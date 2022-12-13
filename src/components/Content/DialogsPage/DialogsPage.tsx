import React from "react";
import styles from './DialogsPage.module.css'
import {DialogBlock} from "./DialogBlock/DialogBlock";
import {DialogsList} from "./DialogsList/DialogsList";
import {DialogsPageDataType, DialogType, MessageType} from "../../../state";

interface DialogsPagePropsType {
    dialogsPageData: DialogsPageDataType
}

function DialogsPage({dialogsPageData}: DialogsPagePropsType) {
    return (
        <div className={styles.dialogsPage}>
            <DialogBlock incomeMessagesData={dialogsPageData.incomeMessagesData}
                         outgoMessagesData={dialogsPageData.outgoMessagesData}/>
            <DialogsList dialogsData={dialogsPageData.dialogsData}/>
        </div>
    )
}

export {DialogsPage}