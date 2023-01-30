import axios from 'axios';
import React, {useEffect} from 'react';
import {UserType} from '../../../redux/users-reducer';

type UsersPagePropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const UsersPage = ({users, follow, unfollow, setUsers}: UsersPagePropsType) => {
    const getUsers = () => {
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                setUsers(res.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>getUsers</button>
            {users.map(u => <div>
                <button onClick={() => follow(u.id)}>follow</button>
                {u.name}</div>)}
        </div>
    )
}