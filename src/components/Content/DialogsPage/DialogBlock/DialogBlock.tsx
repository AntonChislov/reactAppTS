import React, {FC} from "react";
import styles from './DialogsBlock.module.css'
import {addMessageActionCreator} from "../../../../redux/dialogs-reducer";
import {MessageType} from "../../../../redux/state";

type AddMessageProps = {
    dispatch: (action: any) => void
}

const SendMessageBlock:FC<AddMessageProps> = ({dispatch}) => {

    const ref = React.createRef<HTMLInputElement>()

    const addMessage = () => {

        if (ref.current) {
            dispatch(addMessageActionCreator(ref.current.value))
        }
    }

    return (
        <div className={styles.sendMessagesBlock}>
            <input ref={ref} placeholder={'введи сообщение'}/>
            <button onClick={addMessage}>отправить</button>
        </div>
    )
}

interface MessagesType {
    incomeMessagesData: Array<MessageType>
    outgoMessagesData: Array<MessageType>
    dispatch: (action: any) => void
}

function DialogBlock({incomeMessagesData, outgoMessagesData, dispatch}: MessagesType) {

    const incomeMessageElement = incomeMessagesData.map(item => <div key={item.id}
                                                                   className={styles.item1}>{item.message}</div>)
    const outgoMessagesElement = outgoMessagesData.map(item => <div key={item.id}
                                                                    className={styles.item2}>{item.message}</div>)

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
            <SendMessageBlock dispatch={dispatch}/>
        </div>
    )
}

export {DialogBlock}