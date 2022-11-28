import React from 'react';
import './App.css';
import {Profile} from "./Profile/Profile";
import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;