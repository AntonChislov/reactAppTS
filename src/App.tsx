import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Content} from "./Components/Content/Content";
import {Footer} from "./Components/Footer/Footer";
import {DialogsPageDataType, ProfilePageDataType} from './redux/state';

export interface AppPropsType {
    dialogsPageData: DialogsPageDataType
    profilePageData: ProfilePageDataType
    dispatch: (action: any) => void
}

function App(props: AppPropsType) {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Content {...props}/>
            <Footer/>
        </div>
    );
}

export {App};