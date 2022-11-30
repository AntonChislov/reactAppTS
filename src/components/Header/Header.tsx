import React from "react";
import styles from './Header.module.css';

export const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/2048px-SVG_Logo.svg.png'/>
            </div>
        </div>
    )
}

