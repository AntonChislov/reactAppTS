import React from "react";
import styles from './Content.module.css'
import {Routes, Route} from "react-router-dom"
import {Profile} from "../Profile/Profile";
import {Navbar} from "../Navbar/Navbar";
import {Rightbar} from "../Rightbar/Rightbar";
import {Dialogs} from "../Dialogs/Dialogs";
import {Settings} from "../Settings/Settings";
import {News} from "../News/News";
import {Music} from "../Music/Music";

export const Content = () => {
    return (
        <div className={styles.content}>
            <Navbar/>
            <div className={styles.content_page}>
                <Routes>
                    <Route path='/' element={<Profile/>}/>
                    <Route path='dialogs' element={<Dialogs/>}/>
                    <Route path='music' element={<Music/>}/>
                    <Route path='news' element={<News/>}/>
                    <Route path='settings' element={<Settings/>}/>
                </Routes>
            </div>
            <Rightbar/>
        </div>
    )
}