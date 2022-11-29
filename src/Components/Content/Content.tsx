import React from "react";
import styles from './Content.module.css'
import {Profile} from "../Profile/Profile";
import {Navbar} from "../Navbar/Navbar";
import {Rigtbar} from "../Rightbar/Rightbar";

export function Content() {
    return (
        <div className={styles.content}>
            <Navbar/>
            <Profile/>
            <Rigtbar/>
        </div>
    )
}