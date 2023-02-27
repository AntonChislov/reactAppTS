import React from "react";
import styles from "./DialogsList.module.css";
import {DialogType} from "../../../redux/state";

interface DialogsListType {
    dialogsData: Array<DialogType>
}

function DialogsList({dialogsData}: DialogsListType) {

    const dialogsElement = dialogsData.map((item: DialogType) => <div key={item.id}>{item.dialogs}</div>)

    return (
        <div className={styles.dialogsList}>
            <div className={styles.dialogsList_header}>Диалоги</div>
            {dialogsElement}
        </div>
    )
}

export {DialogsList}