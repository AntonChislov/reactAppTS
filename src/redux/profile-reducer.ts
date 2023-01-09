import {ProfilePageDataType} from "./state";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

export const profileReducer = (state: ProfilePageDataType, action: {type: string, currentValueInput: any}) => {
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
