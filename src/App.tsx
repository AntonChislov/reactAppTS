import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Content} from "./Components/Content/Content";
import {Footer} from "./Components/Footer/Footer";

export const App = () => {
    return (
        <div className="App-wrapper">
            <div className="grid_block">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </div>
    );
}