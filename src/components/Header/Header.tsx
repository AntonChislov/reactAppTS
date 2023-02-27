import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {InitialStateType} from '../../redux/auth-reducer';

type PropsType = {
    data: InitialStateType
}

function Header(props: PropsType) {
    return (
        <div className={styles.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/2048px-SVG_Logo.svg.png"/>
            {props.data.isAuth
                ? <div style={{color: 'white'}}>{props.data.login}</div>
                : <NavLink to={'login'}>Login</NavLink>
            }
        </div>
    )
}

export {Header}