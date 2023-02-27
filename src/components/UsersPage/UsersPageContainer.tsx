import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import axios from 'axios';
import {UsersPage} from './UsersPage';
import {Preloader} from '../../Preloader/Preloader';

type MapStateType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    usersTotalCount: number
    isFetching: boolean
}
type UsersPagePropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: (isFetching: boolean) => void
    pageSize: number
    currentPage: number
    usersTotalCount: number
    isFetching: boolean
}

class UsersPageContainer extends React.Component<UsersPagePropsType, AppStateType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
                this.props.setUsers(res.data.items)
                this.props.setIsFetching(false)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
                .catch(err => console.log(err))
        }
    }

    onClickSpan = (pageNumber: number) => {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setIsFetching(false)
        })
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <UsersPage users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                             currentPage={this.props.currentPage} usersTotalCount={this.props.usersTotalCount}
                             onClickSpan={this.onClickSpan}/>}

        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        usersTotalCount: state.usersPage.usersTotalCount,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, setIsFetching})(UsersPageContainer)