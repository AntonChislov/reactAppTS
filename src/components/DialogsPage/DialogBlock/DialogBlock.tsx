import React, {FC, useState} from 'react';
import styles from './DialogsBlock.module.css'
// import {MessageType} from "../../../redux/state";
import Message from './Message/Message';
import {MessageType} from '../../../redux/dialogs-reducer';
import FriendMessage from './FriendMessage/FriendMessage';
// import {MessageType} from '../../../redux/state';

type AddMessageProps = {
    sendMessage: (text: string) => void
}

const SendMessageBlock: FC<AddMessageProps> = ({sendMessage}) => {


    const [value, setValue] = useState('')

    const addMessage = () => {
        if (value) {
            sendMessage(value)
            setValue('')
        }
    }

    return (
        <div className={styles.sendMessagesBlock}>
            <input value={value} onChange={(e) => setValue(e.currentTarget.value)}placeholder={'введи сообщение'}/>
            <button onClick={addMessage}>отправить</button>
        </div>
    )
}

interface MessagesType {
    incomeMessagesData: Array<MessageType>
    outgoMessagesData: Array<MessageType>
    sendMessage: (text: string) => void
}

function DialogBlock({incomeMessagesData, outgoMessagesData, sendMessage}: MessagesType) {

    const incomeMessageElement = incomeMessagesData.map(item => <FriendMessage message={item} key={item.id}/>)
    const outgoMessagesElement = outgoMessagesData.map(item => <Message message={item} key={item.id}/>)

    const messageList = []

    const largerArray = incomeMessageElement.length > outgoMessagesElement.length ? incomeMessageElement.length : outgoMessagesElement.length

    for (let i = 0; i < largerArray; i++) {
        messageList.push(outgoMessagesElement[i])
        messageList.push(incomeMessageElement[i])
    }

    return (
        <div className={styles.dialogsBlock}>
            <div className={styles.messagesBlock}>
                {messageList}
            </div>
            <SendMessageBlock sendMessage={sendMessage}/>
        </div>
    )
}

export {DialogBlock}