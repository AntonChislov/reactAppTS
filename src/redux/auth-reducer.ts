import {AppStateType} from './redux-store';

type AuthActionType = {
    type: 'AUTH-ME'
    data: {
        userId: number | null
        login: string | null
        email: string | null
    }
}

export type InitialStateType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case 'AUTH-ME': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (userId: number, login: string, email: string): AuthActionType => {
    return {type: 'AUTH-ME', data: {userId, login, email}}
}