import {DialogsPageDataType} from "./state";

const ADD_MESSAGE = 'ADD_MESSAGE'

export const dialogsReducer = (state: DialogsPageDataType, action: {type: string, text: string}) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 34, message: action.text}
            state.outgoMessagesData.push(newMessage)
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = (text: string) => {
    return {type: ADD_MESSAGE, text}
}
