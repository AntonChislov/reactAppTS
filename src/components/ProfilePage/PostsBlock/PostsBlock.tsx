import React from "react";
import styles from './PostsBlock.module.css'
import {ProfilePageDataType} from '../../../redux/state'

interface PostPropsType {
    text: string
    like: number
}

interface PostsBlockPropsType {
    profilePageData: ProfilePageDataType
    onAddPost: () => void
    onPostChange: (text: string) => void
}

interface AddPostBlockType {
    textInput: string
    onAddPost: () => void
    postChange: (value: string) => void
}

function Post({text, like}: PostPropsType) {
    return (
        <div className={styles.post}>
            <div>{text}</div>
            <div className={styles.post_like}>лайков {like}</div>
        </div>
    )
}

function AddPostBlock({textInput, onAddPost, postChange}: AddPostBlockType) {

    const ref = React.useRef<HTMLInputElement | null>(null)

    const addPostButton = () => {
        onAddPost()
    }

    const onPostChange = () => {
            if(ref.current) postChange(ref.current.value)
    }

    return (
        <div className={styles.addPostBlock}>
            <div>
                <input autoFocus={true} value={textInput} onChange={onPostChange} ref={ref} placeholder={'введи текст'}/>
                <button onClick={addPostButton}>добавить</button>
            </div>
        </div>
    )
}

function PostsBlock({profilePageData, onAddPost, onPostChange}: PostsBlockPropsType) {

    return (
        <div className={styles.postsBlock}>
            <div className={styles.posts}>
                <div className={styles.postsBlock_header}>Посты</div>
                {profilePageData.postsData.map(item => <Post key={item.id} text={item.text} like={item.like}/>)}
            </div>
            <AddPostBlock postChange={onPostChange} onAddPost={onAddPost} textInput={profilePageData.textInput}/>
        </div>
    )
}

export {PostsBlock}