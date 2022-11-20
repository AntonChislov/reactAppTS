import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App-header">
            <Header/>
            <Technologies/>
        </div>
    );
}

function Header() {
    return (
        <div>
            <div>one div</div>
        </div>
    )
}

function Technologies() {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}

export default App;
