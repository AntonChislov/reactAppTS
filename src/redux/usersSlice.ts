import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
}

type InitialStateType = {
    users: Array<UserType>
}

const initialState: InitialStateType = {
    users: []
}

export const usersSlice = createSlice({
    name: 'usersPage',
    initialState,
    reducers: {
        follow: (state, action: PayloadAction<number>) => {
                state.users = state.users.map(u => {
                    if (u.id === action.payload) {
                        return {...u, followed: true}
                    }
                    return u
                })
        },
        unfollow: (state, action: PayloadAction<number>) => {
            state.users = state.users.map(u => {
                if (u.id === action.payload) {
                    return {...u, followed: false}
                }
                return u
            })
        },
        setUsers: (state, action: PayloadAction<UserType[]>) => {
            state.users = [...state.users, ...action.payload]
        },
    }
})

export const {follow, unfollow, setUsers} = usersSlice.actions

export const selectUsers = (state: InitialStateType) => state

export const usersReducer =  usersSlice.reducer