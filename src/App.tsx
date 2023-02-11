import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Content} from "./Components/Content/Content";
import {Footer} from "./Components/Footer/Footer";

export const App = () => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}