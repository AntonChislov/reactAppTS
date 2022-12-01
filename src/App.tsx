import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;