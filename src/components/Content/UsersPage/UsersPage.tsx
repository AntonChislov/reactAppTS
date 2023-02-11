import styles from './UsersPage.module.css';
import React from 'react';
import {UserType} from '../../../redux/users-reducer';
import boy from '../../../image/avatar/boy.svg'
import girl1 from '../../../image/avatar/girl-1.svg'
import boy1 from '../../../image/avatar/boy-1.svg'
import girl from '../../../image/avatar/girl.svg'
import man from '../../../image/avatar/man.svg'
import man1 from '../../../image/avatar/man-1.svg'
import man2 from '../../../image/avatar/man-2.svg'
import man3 from '../../../image/avatar/man-3.svg'
import man4 from '../../../image/avatar/man-4.svg'
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    onClickSpan: (pageNumber: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    usersTotalCount: number
}
export const UsersPage = (props: UsersPropsType) => {

    const totalPage = Math.ceil(props.usersTotalCount / 1000)
    let allPage: Array<number> = []
    for (let i = 1; i <= totalPage; i++) {
        allPage.push(i)
    }
    const arrImg = [boy, girl1, boy1, girl, man, man1, man3, man2, man4]

    return <div>
        <div>{allPage.map(item => <span onClick={() => props.onClickSpan(item)}
                                        className={props.currentPage === item ? styles.pageBolt : ''}>{item}</span>)}</div>
        {props.users.map(u => <div>
            <div style={{marginTop: '10px'}}>
                <NavLink to={'/profile/' + u.id}><img alt={''} className={styles.img} src={u.photos.small || arrImg[Math.floor(Math.random() * 9)]}/></NavLink>
            </div>
            {u.followed
                ? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
                : <button onClick={() => props.follow(u.id)}>follow</button>
            }
            {u.name}</div>)}
    </div>
}
