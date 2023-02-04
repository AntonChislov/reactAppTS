import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {profileSlice} from './profileSlice';

type MessageType = {
    id: number
    message: string
}

type InitialStateType = {
    incomeMessagesData: MessageType[]
    outgoMessagesData: MessageType[]
    dialogsData: Array<{id: number, dialogs: string}>
}

const initialState: InitialStateType = {
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

export const dialogsSlice = createSlice({
    name: 'dialogsPage',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<string>) => {
            state.outgoMessagesData = [...state.outgoMessagesData, {id: 34, message: action.payload}]
        }
    }
})

export const {addMessage} = dialogsSlice.actions

export const selectDialogs = (state: InitialStateType) => state

export const dialogsReducer =  dialogsSlice.reducer