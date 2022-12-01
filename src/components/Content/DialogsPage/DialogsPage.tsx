import React from "react";
import styles from './DialogsPage.module.css'

const Dialog = () => {
    return (
        <div className={styles.messagesBlock}>
            <div className={styles.item1}>харош</div>
            <div className={styles.item2}>все круто</div>
            <div className={styles.item1}>как дела?</div>
            <div className={styles.item2}>здаров</div>
            <div className={styles.item1}>привет</div>
        </div>
    )
}

const SendMessageBlock = () => {
    return (
        <div className={styles.sendMessagesBlock}>
            <input placeholder={'введи сообщение'}/>
            <button>отправить</button>
        </div>
    )
}

const DialogsList = () => {
    return (
        <div className={styles.dialogsList}>
            <div>Анжелика</div>
            <div>Сюзанна</div>
            <div>Андрей</div>
            <div>Руслан</div>
            <div>Жанна</div>
        </div>
    )
}

export const DialogsPage = () => {
    return (
        <div className={styles.dialogsPage}>
            <Dialog/>
            <SendMessageBlock/>
            <DialogsList/>
        </div>
    )
}

