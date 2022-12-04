import React from "react";
import styles from './PostsBlock.module.css'
import {PostsType} from "../../../../index";

interface PostPropsType {
    text: string
    like: number
}

const Post: React.FC<PostPropsType> = ({text, like}) => {
    return (
        <div className={styles.post}>
            <div>{text}</div>
            <div className={styles.post_like}>лайков {like}</div>
        </div>
    )
}

const AddPostBlock = () => {
    return (
        <div className={styles.addPostBlock}>
            <div>
                <input placeholder={'введи текст'}/>
                <button>добавить</button>
            </div>
        </div>
    )
}

interface PostsBlockPropsType {
    postsData: Array<PostsType>
}

export const PostsBlock: React.FC<PostsBlockPropsType> = ({postsData}) => {

    const postElement = postsData.map(item => <Post key={item.id} text={item.text} like={item.like}/>)

    return (
        <div className={styles.postsBlock}>
            <div className={styles.posts}>
                <div className={styles.postsBlock_header}>Посты</div>
                {postElement}
            </div>
            <AddPostBlock/>
        </div>
    )
}