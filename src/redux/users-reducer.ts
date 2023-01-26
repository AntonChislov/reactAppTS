const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}

type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}

type SetUsersActionType = {
    type: 'SET_USERS'
    users: UserType[]
}

type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: {city: string, country: string}
}

const initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Anton', status: 'I am a boss', location: {city: 'Krasnodar', country: 'Russian'}},
        {id: 2, followed: false, fullName: 'Anatoliy', status: 'I am a boss', location: {city: 'Krasnodar', country: 'Russian'}},
        {id: 3, followed: false, fullName: 'Virtor', status: 'I am a boss', location: {city: 'Krasnodar', country: 'Russian'}}
    ]
}

type InitialStateType = {
    users: Array<UserType>
}

type ActionType = SetUsersActionType | FollowActionType | UnFollowActionType

export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                       return  {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return  {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case 'SET_USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        default:
            return state
    }
}

export const followAC = (userId: number): FollowActionType => {
    return {type: 'FOLLOW', userId}
}

export const unfollowAC = (userId: number): UnFollowActionType => {
    return {type: 'UNFOLLOW', userId}
}

export const setUsersAC = (users: UserType[]): SetUsersActionType => {
    return {type: 'SET_USERS', users}
}