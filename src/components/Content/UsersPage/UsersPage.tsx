import axios from 'axios';
import React from 'react';
import {UserType} from '../../../redux/users-reducer';
import {AppStateType} from '../../../redux/redux-store';

type UsersPropsType = {
    users: UserType[]
    setUsers: (users: UserType[]) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export class UsersPage extends React.Component<UsersPropsType, AppStateType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                this.props.setUsers(res.data.items)
            })
        }
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.id}>
                    {u.followed
                        ? <button onClick={() => this.props.unfollow(u.id)}>unfollow</button>
                        : <button onClick={() => this.props.follow(u.id)}>follow</button>}
                    {u.name}</div>)}
            </div>
        )
    }
}

