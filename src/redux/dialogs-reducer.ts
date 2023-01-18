import {DialogsPageDataType} from "./state";

const ADD_MESSAGE = 'ADD_MESSAGE'

const initialState: DialogsPageDataType = {
    incomeMessagesData: [
        {id: 4, message: 'здаров'},
        {id: 2, message: 'все круто'},
    ],
    outgoMessagesData: [
        {id: 5, message: 'привет'},
        {id: 3, message: 'как дела?'},
        {id: 1, message: 'харош'},
    ],
    dialogsData: [
        {id: 1, dialogs: 'Анжелика'},
        {id: 2, dialogs: 'Сюзанна'},
        {id: 3, dialogs: 'Андрей'},
        {id: 4, dialogs: 'Руслан'},
        {id: 5, dialogs: 'Жанна'},
    ]
}

export const dialogsReducer = (state = initialState, action: {type: string, text: string}) => {
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
