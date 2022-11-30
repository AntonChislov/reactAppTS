import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}

export default App;