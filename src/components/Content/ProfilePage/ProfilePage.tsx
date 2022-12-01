import React from "react";
import styles from './ProfilePage.module.css'

export const ProfilePage = () => {
    return (
        <div className={styles.profilePage}>
            <span>Профиль</span>
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

