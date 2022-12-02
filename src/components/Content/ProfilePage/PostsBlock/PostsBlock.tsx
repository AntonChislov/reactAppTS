import React from "react";
import styles from './PostsBlock.module.css'

const postsData = [
    {id: 1, text: 'учу реакт!!! летим', like: 3},
    {id: 2, text: 'дорога возникает под ногами идущего', like: 5},
    {id: 3, text: 'нормально делай - нормально будет', like: 2},
    {id: 4, text: 'настроение огонь', like: 34},
]

type PostType = {
    text: string
    like: number
}

const Post: React.FC<PostType> = ({text, like}) => {
    return (
        <div className={styles.post}>
            <div>{text}</div>
            <div>лайков {like}</div>
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

export const PostsBlock = () => {

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