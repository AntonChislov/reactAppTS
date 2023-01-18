import {ProfilePageDataType} from "./state";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

const initialState: ProfilePageDataType = {
    postsData: [
        {id: 1, text: 'учу реакт!!! летим', like: 3},
        {id: 2, text: 'дорога возникает под ногами идущего', like: 5},
        {id: 3, text: 'нормально делай - нормально будет', like: 2},
        {id: 4, text: 'настроение огонь', like: 34},
    ],
    textInput: ''
}

export const profileReducer = (state = initialState, action: {type: string, currentValueInput: any}) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.textInput,
                like: 0
            }
            state.postsData.push(newPost)
            state.textInput = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.textInput = action.currentValueInput
            return state
        default:
            return state
    }
}

export const addPostButtonActionCreator = () => {
    return {type: ADD_POST}
}

export const onPostChangeActionCreator = (currentValueInput: string) => {
    return {type: UPDATE_NEW_POST_TEXT, currentValueInput}
}
