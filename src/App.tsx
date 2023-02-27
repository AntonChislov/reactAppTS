import React from 'react';
import './App.css';
import {Navbar} from './Components/Navbar/Navbar';
import {Footer} from './Components/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import {DialogsPage} from './Components/DialogsPage/DialogsPage';
import UsersPageContainer from './Components/UsersPage/UsersPageContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

export const App = () => {
    return (
        <div className="App-wrapper">
            <div>
                <HeaderContainer/>
                <div className="navAndContent">
                    <Navbar/>
                    <Routes>
                        <Route path="/profile" element={<ProfilePage/>}/>
                        <Route path="/profile/:userId" element={<ProfilePage/>}/>
                        <Route path="dialogs" element={<DialogsPage/>}/>
                        <Route path="users" element={<UsersPageContainer/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </div>
    );
}