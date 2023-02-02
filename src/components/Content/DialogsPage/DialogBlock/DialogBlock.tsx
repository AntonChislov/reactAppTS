import React, {FC} from "react";
import styles from './DialogsBlock.module.css'
import {MessageType} from "../../../../redux/state";
import {SendMessageBlock} from './SendMessageBlock/SendMessageBlock';
import {AppStateType} from '../../../../redux/redux-store';

interface MessagesType {
    incomeMessagesData: Array<MessageType>
    outgoMessagesData: Array<MessageType>
    sendMessage: (text: string) => void
}

export class DialogBlock extends React.Component<MessagesType, AppStateType>{

    render() {

        const incomeMessageElement = this.props.incomeMessagesData.map(item => <div key={item.id}
                                                                         className={styles.item1}>{item.message}</div>)
        const outgoMessagesElement = this.props.outgoMessagesData.map(item => <div key={item.id}
                                                                        className={styles.item2}>{item.message}</div>)

        const messageList = []

        const largerArray = incomeMessageElement.length > outgoMessagesElement.length ? incomeMessageElement.length : outgoMessagesElement.length

        for (let i = 0; i < largerArray; i++) {
            messageList.push(outgoMessagesElement[i])
            messageList.push(incomeMessageElement[i])
        }

        return <div className={styles.dialogsBlock}>
            <div className={styles.messagesBlock}>
                {messageList}
            </div>
            <SendMessageBlock sendMessage={this.props.sendMessage}/>
        </div>
    }
}