import React from "react";
import styles from './Post.module.css';

type PostType = {
    message: string
}

export const Post: React.FC<PostType> = ({message}) => {
    return (
        <div>
            {message}
        </div>
    )
}