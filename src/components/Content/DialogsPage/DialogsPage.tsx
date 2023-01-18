import React from "react";
import styles from './DialogsPage.module.css'
import {DialogBlock} from "./DialogBlock/DialogBlock";
import {DialogsList} from "./DialogsList/DialogsList";
import {DialogsPageDataType, DialogType, MessageType} from "../../../redux/state";
import {DialogBlockContainer} from "./DialogBlock/DialogBlockContainer";

interface DialogsPagePropsType {
    dialogsPageData: DialogsPageDataType
    dispatch: (action: any) => void
}

function DialogsPage({dialogsPageData, dispatch}: DialogsPagePropsType) {
    return (
        <div className={styles.dialogsPage}>
            <DialogBlockContainer incomeMessagesData={dialogsPageData.incomeMessagesData}
                         outgoMessagesData={dialogsPageData.outgoMessagesData}
                        dispatch={dispatch}/>
            <DialogsList dialogsData={dialogsPageData.dialogsData}/>
        </div>
    )
}

export {DialogsPage}