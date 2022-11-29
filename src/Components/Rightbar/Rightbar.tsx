import React from "react";
import styles from './Rightbar.module.css'
import {Routes, Route} from "react-router-dom"
import {Friends} from "../Friends/Friends";
import {Subscriptions} from "../Subscriptions/Subscriptions";
import {DialogsList} from "../DialogsList/DialogsList";

export const Rightbar = () => {
    return (
        <div className={styles.rightbar_block}>
            <Routes>
                <Route path='/' element={<Friends/>}/>
                <Route path='dialogs' element={<DialogsList/>}/>
            </Routes>
        </div>
    )
}