import React from "react";
import styles from './DialogsBlock.module.css'
import {MessageType} from "../../../../index";

const SendMessageBlock = () => {
    return (
        <div className={styles.sendMessagesBlock}>
            <input placeholder={'введи сообщение'}/>
            <button>отправить</button>
        </div>
    )
}

interface MessagesType {
    incomeMessagesData: Array<MessageType>
    outgoMessagesData: Array<MessageType>
}

export const DialogBlock: React.FC<MessagesType> = ({incomeMessagesData, outgoMessagesData}) => {

    const incomMessageElement = incomeMessagesData.map(item => <div key={item.id}
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