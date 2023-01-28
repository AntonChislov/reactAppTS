import React from 'react';
import {UsersPage} from './UsersPage';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../../redux/users-reducer';
import { Dispatch } from 'redux';

type MapStateType = {
    users: UserType[]
}

type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage)