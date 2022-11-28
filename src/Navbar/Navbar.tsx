import React from "react";
import './Navbar.css';


export function Navbar() {
    return (
        <div className='navbar'>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>Friends</a></div>
            <div><a>Music</a></div>
        </div>
    )
}

