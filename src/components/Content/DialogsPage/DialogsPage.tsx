import React from "react";
import styles from './DialogsPage.module.css'
import {DialogBlock} from "./DialogBlock/DialogBlock";
import {DialogsList} from "./DialogsList/DialogsList";
import {DialogType, MessageType} from "../../../state";

interface DialogsPagePropsType {
    incomeMessagesData: Array<MessageType>
    outgoMessagesData: Array<MessageType>
    dialogsData: Array<DialogType>
}

export const DialogsPage: React.FC<DialogsPagePropsType> = ({incomeMessagesData, outgoMessagesData, dialogsData}) => {
    return (
        <div className={styles.dialogsPage}>
            <DialogBlock incomeMessagesData={incomeMessagesData}
                         outgoMessagesData={outgoMessagesData}/>
            <DialogsList dialogsData={dialogsData}/>
        </div>
    )
}