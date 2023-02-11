type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}

type ToggleIsFetching = {
    type: 'IS_FETCHING'
    isFetching: boolean
}

type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}

type SetUsersActionType = {
    type: 'SET_USERS'
    users: UserType[]
}

type SetTotalUsersCountActionType = {
    type: 'SET_TOTAL_USERS_COUNT'
    usersTotalCount: number
}

type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}

export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
    photos: {small: string, large: string}
}

const initialState = {
    users: [],
    pageSize: 6,
    currentPage: 1,
    usersTotalCount: 0,
    isFetching: false,
    photos: {
        small: '',
        large: ''
    }
}

type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    usersTotalCount: number
    isFetching: boolean
}

type ActionType = SetUsersActionType | FollowActionType | UnFollowActionType | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetching

export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
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
                        return {...u, followed: false}
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
        case 'SET_TOTAL_USERS_COUNT': {
            return {
                ...state,
                usersTotalCount: action.usersTotalCount
            }
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

export const follow = (userId: number): FollowActionType => {
    return {type: 'FOLLOW', userId}
}
export const unfollow = (userId: number): UnFollowActionType => {
    return {type: 'UNFOLLOW', userId}
}
export const setUsers = (users: UserType[]): SetUsersActionType => {
    return {type: 'SET_USERS', users}
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {type: 'SET_CURRENT_PAGE', currentPage}
}
export const setTotalUsersCount = (usersTotalCount: number): SetTotalUsersCountActionType => {
    return {type: 'SET_TOTAL_USERS_COUNT', usersTotalCount}
}
export const setIsFetching = (isFetching: boolean): ToggleIsFetching => {
    return {type: 'IS_FETCHING', isFetching}
}