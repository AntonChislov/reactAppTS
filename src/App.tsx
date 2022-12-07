import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Content} from "./Components/Content/Content";
import {Footer} from "./Components/Footer/Footer";
import {DialogType, MessageType, PostsType} from './state';

export interface AppPropsType {
    incomeMessagesData: Array<MessageType>
    outgoMessagesData: Array<MessageType>
    dialogsData: Array<DialogType>
    postsData: Array<PostsType>
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