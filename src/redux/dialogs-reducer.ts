const ADD_MESSAGE = 'ADD_MESSAGE'

type MessageType = {
    id: number
    message: string
}

type InitialStateType = {
    incomeMessagesData: MessageType[]
    outgoMessagesData: MessageType[]
    dialogsData: Array<{id: number, dialogs: string}>
}

const initialState = {
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

export const dialogsReducer = (state: InitialStateType = initialState, action: {type: string, text: string}): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, outgoMessagesData: [...state.outgoMessagesData, {id: 34, message: action.text}]}
        default:
            return state
    }
}

export const addMessageActionCreator = (text: string) => {
    return {type: ADD_MESSAGE, text}
}
