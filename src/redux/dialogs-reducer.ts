const ADD_MESSAGE = 'ADD_MESSAGE'

export type MessageUserType = {
    text: string
    time: string
}

export type UserType = {
    avatar: any
    name: string
}

export type MessageType = {
    id: number
    user: UserType
    message: MessageUserType
}

// type MessageType = {
//     id: number
//     message: string
// }

type InitialStateType = {
    incomeMessagesData: MessageType[]
    outgoMessagesData: MessageType[]
    dialogsData: Array<{id: number, dialogs: string}>
}

const initialState = {
    incomeMessagesData: [
        {id: 4, user: {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYZnTGTG3jPXtlSuI8qX-YxgP9JmPN7ZUyMhtVMBTFA&s', name: 'Лена'}, message: {text: 'здаров', time: '22:34'}},
        {id: 2, user: {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYZnTGTG3jPXtlSuI8qX-YxgP9JmPN7ZUyMhtVMBTFA&s', name: 'Лена'}, message: {text: 'все круто', time: '21:34'}},
    ],
    outgoMessagesData: [
        {id: 5, user: {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB7CGFPsZjPgpv2g8UQ8LvaKCzDt_kOWbVbdW7GI&s', name: 'Антон'}, message: {text: 'привет', time: '21:33'}},
        {id: 3, user: {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB7CGFPsZjPgpv2g8UQ8LvaKCzDt_kOWbVbdW7GI&s', name: 'Антон'}, message: {text: 'как дела?', time: '21:30'}},
        {id: 1, user: {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB7CGFPsZjPgpv2g8UQ8LvaKCzDt_kOWbVbdW7GI&s', name: 'Антон'}, message: {text: 'харош', time: '21:43'}},
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
            return {
                ...state,
                outgoMessagesData: [
                    ...state.outgoMessagesData,
                    {id: 43, user: {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB7CGFPsZjPgpv2g8UQ8LvaKCzDt_kOWbVbdW7GI&s', name: 'Антон'}, message: {text: action.text, time: '33:87'}}
                ]
            }
        default:
            return state
    }
}

export const addMessageActionCreator = (text: string) => {
    return {type: ADD_MESSAGE, text}
}
