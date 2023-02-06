const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

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

export const profileReducer = (state = initialState, action: { type: string, currentValueInput: any }): ProfilePageDataType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, postsData: [...state.postsData, {id: 5, text: state.textInput, like: 0}], textInput: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, textInput: action.currentValueInput}
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
