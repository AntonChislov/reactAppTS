import React from "react";
import styles from './PostsBlock.module.css'
import {addPostButtonActionCreator, onPostChangeActionCreator, ProfilePageDataType} from "../../../../state";

interface PostPropsType {
    text: string
    like: number
}

interface PostsBlockPropsType {
    profilePageData: ProfilePageDataType
    dispatch: (action: any) => void
}

interface AddPostBlockType {
    textInput: string
    dispatch: (action: any) => void
}

function Post({text, like}: PostPropsType) {
    return (
        <div className={styles.post}>
            <div>{text}</div>
            <div className={styles.post_like}>лайков {like}</div>
        </div>
    )
}

function AddPostBlock({textInput, dispatch}: AddPostBlockType) {

    const ref = React.useRef<HTMLInputElement | null>(null)

    const addPostButton = () => {
            dispatch(addPostButtonActionCreator())
    }

    const onPostChange = () => {
            if(ref.current) dispatch(onPostChangeActionCreator(ref.current.value))
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

function PostsBlock({profilePageData, dispatch}: PostsBlockPropsType) {

    return (
        <div className={styles.postsBlock}>
            <div className={styles.posts}>
                <div className={styles.postsBlock_header}>Посты</div>
                {profilePageData.postsData.map(item => <Post key={item.id} text={item.text} like={item.like}/>)}
            </div>
            <AddPostBlock dispatch={dispatch} textInput={profilePageData.textInput}/>
        </div>
    )
}

export {PostsBlock}