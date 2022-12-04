import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Content} from "./Components/Content/Content";
import {Footer} from "./Components/Footer/Footer";
import {DialogType, MessageType, PostsType} from "./index";

export interface AppPropsType {
    incomeMessagesData: Array<MessageType>
    outgoMessagesData: Array<MessageType>
    dialogsData: Array<DialogType>
    postsData: Array<PostsType>
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Content {...props}/>
            <Footer/>
        </div>
    );
}

export default App;