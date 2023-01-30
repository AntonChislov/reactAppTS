import React from 'react';
import styles from './Content.module.css'
import {Routes, Route} from 'react-router-dom';
import {ProfilePage} from './ProfilePage/ProfilePage';
import {DialogsPage} from './DialogsPage/DialogsPage';
import {AppPropsType} from '../../App';
import {UsersPageContainer} from './UsersPage/UsersPageContainer';

function Content(props: AppPropsType) {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="/" element={<ProfilePage/>}/>
                <Route path="dialogs/*" element={<DialogsPage/>}/>
                <Route path="users/*" element={<UsersPageContainer />}/>
            </Routes>
        </div>
    )
}

export {Content}