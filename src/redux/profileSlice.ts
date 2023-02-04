import {createSlice} from '@reduxjs/toolkit';

export type ProfilePageDataType = {
    postsData: Array<{ id: number, text: string, like: number }>
    textInput: string
}

const initialState: ProfilePageDataType = {
    postsData: [
        {id: 1, text: 'учу реакт!!! летим', like: 3},
        {id: 2, text: 'дорога возникает под ногами идущего', like: 5},
        {id: 3, text: 'нормально делай - нормально будет', like: 2},
        {id: 4, text: 'настроение огонь', like: 34},
    ],
    textInput: ''
}

export const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
        addPost: (state) => {
            state.postsData = [...state.postsData, {id: 5, text: state.textInput, like: 0}]
            state.textInput = ''
        },
        updateNewPostText: (state, action) => {
            state.textInput = action.payload
        }
    }
})

export const {addPost, updateNewPostText} = profileSlice.actions

export const selectProfile = (state: ProfilePageDataType) => state

export const profileReducer =  profileSlice.reducer