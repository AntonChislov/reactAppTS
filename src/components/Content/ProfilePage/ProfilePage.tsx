import React from "react";
import styles from './ProfilePage.module.css'

const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.profileInfo_header}>Профиль</div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHg_t3WBJBy4SEC_9uU-gi71PNXXdInw5uRQ&usqp=CAU'/>
            </div>
            <div>Антон Числов</div>
            <div>Статус</div>
            <div>Увлечения</div>
            <div>Ссылки</div>
        </div>
    )
}

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

const PostsBlock = () => {
    return (
        <div className={styles.postsBlock}>
            <div className={styles.postsBlock_header}>Посты</div>
            <Post text={'учу реакт!!! летим'} like={3}/>
            <Post text={'дорога возникоет под ногами идущего'} like={44}/>
            <Post text={'нормально делай - нормально будет'} like={84}/>
            <Post text={'настроение огонь'} like={1}/>
        </div>
    )
}

export const ProfilePage = () => {
    return (
        <div className={styles.profilePage}>
            <ProfileInfo/>
            <PostsBlock/>
        </div>
    )
}

