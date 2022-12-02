import React from "react";
import styles from "./DialogsList.module.css";

const dialogsData = [
    {id: 1, dialogs: 'Анжелика'},
    {id: 2, dialogs: 'Сюзанна'},
    {id: 3, dialogs: 'Андрей'},
    {id: 4, dialogs: 'Руслан'},
    {id: 5, dialogs: 'Жанна'},
]

export const DialogsList = () => {

    const dialogsElement = dialogsData.map(item => <div key={item.id}>{item.dialogs}</div>)

    return (
        <div className={styles.dialogsList}>
            {dialogsElement}
        </div>
    )
}