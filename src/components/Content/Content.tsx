import React from 'react';
import styles from './Content.module.css'
import {Routes, Route} from 'react-router-dom';
import {DialogsPage} from './DialogsPage/DialogsPage';
import UsersPageContainer from './UsersPage/UsersPageContainer';
import ProfilePage from './ProfilePage/ProfilePage';

export const Content = () => {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/profile/:userId" element={<ProfilePage/>}/>
                <Route path="dialogs" element={<DialogsPage/>}/>
                <Route path="users" element={<UsersPageContainer/>}/>
            </Routes>
        </div>
    )
}