import React from "react";
import {addMessageActionCreator} from "../../../../redux/dialogs-reducer";
import {MessageType} from "../../../../redux/state";
import {DialogBlock} from "./DialogBlock";

interface MessagesType {
    incomeMessagesData: Array<MessageType>
    outgoMessagesData: Array<MessageType>
    dispatch: (action: any) => void
}

export function DialogBlockContainer({incomeMessagesData, outgoMessagesData, dispatch}: MessagesType) {

    const addMessage = (text: string) => {
        if (text) {
            dispatch(addMessageActionCreator(text))
        }
    }

    return <DialogBlock incomeMessagesData={incomeMessagesData} outgoMessagesData={outgoMessagesData}
                        sendMessage={addMessage}/>
}

