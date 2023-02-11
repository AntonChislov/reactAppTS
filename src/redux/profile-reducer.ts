const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export type ProfilePageDataType = {
    postsData: Array<{ id: number, text: string, like: number }>
    textInput: string
    userProfile: UserProfileData
}

export type UserProfileData = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}

type AddPostType = {
    type: 'ADD-POST'
}

type OnPostChangeType = {
    type: 'UPDATE-NEW-POST-TEXT'
    currentValueInput: string
}

type SetUserType = {
    type: 'SET-USER-PROFILE'
    profile: UserProfileData
}

const initialState: ProfilePageDataType = {
    postsData: [
        {id: 1, text: 'учу реакт!!! летим', like: 3},
        {id: 2, text: 'дорога возникает под ногами идущего', like: 5},
        {id: 3, text: 'нормально делай - нормально будет', like: 2},
        {id: 4, text: 'настроение огонь', like: 34},
    ],
    textInput: '',
    userProfile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: null,
        fullName: 'AntonChislov',
        userId: 28987,
        photos: {
            small: null,
            large: null
        }
    }
}
type ActionType = AddPostType | OnPostChangeType | SetUserType

export const profileReducer = (state = initialState, action: ActionType): ProfilePageDataType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, postsData: [...state.postsData, {id: 5, text: state.textInput, like: 0}], textInput: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, textInput: action.currentValueInput}
        case SET_USER_PROFILE:
            return {...state, userProfile: action.profile}
        default:
            return state
    }
}

export const addPostButtonActionCreator = (): AddPostType => {
    return {type: ADD_POST}
}
export const onPostChangeActionCreator = (currentValueInput: string): OnPostChangeType => {
    return {type: UPDATE_NEW_POST_TEXT, currentValueInput}
}
export const setUserProfile = (profile: UserProfileData): SetUserType => {
    return {type: SET_USER_PROFILE, profile}
}
