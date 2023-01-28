import React from 'react';
import {UserType} from '../../../redux/users-reducer';

type UsersPagePropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const UsersPage = ({users, follow, unfollow, setUsers}: UsersPagePropsType) => {
    return (
        <div>
            {users.map(u => <div><button onClick={() => follow(u.id)}>follow</button>{u.fullName}</div>)}
        </div>
    )
}