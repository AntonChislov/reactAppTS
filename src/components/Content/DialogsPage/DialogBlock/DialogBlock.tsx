import React from "react";
import styles from './DialogsBlock.module.css'

const incomMessagesData = [
    {id: 4, message: 'здаров'},
    {id: 2, message: 'все круто'},
]

const outgoMessagesData = [
    {id: 5, message: 'привет'},
    {id: 3, message: 'как дела?'},
    {id: 1, message: 'харош'},
]

const SendMessageBlock = () => {
    return (
        <div className={styles.sendMessagesBlock}>
            <input placeholder={'введи сообщение'}/>
            <button>отправить</button>
        </div>
    )
}

export const DialogBlock = () => {

    const incomMessageElement = incomMessagesData.map(item => <div key={item.id}
                                                                   className={styles.item1}>{item.message}</div>)
    const outgoMessagesElement = outgoMessagesData.map(item => <div key={item.id}
                                                                    className={styles.item2}>{item.message}</div>)

    const messageList = []

    const largerArray = incomMessageElement.length > outgoMessagesElement.length ? incomMessageElement.length : outgoMessagesElement.length

    for (let i = 0; i < largerArray; i++) {
        messageList.push(outgoMessagesElement[i])
        messageList.push(incomMessageElement[i])
    }

    return (
        <div className={styles.dialogsBlock}>
            <div className={styles.messagesBlock}>
                {messageList}
            </div>
            <SendMessageBlock/>
        </div>
    )
}