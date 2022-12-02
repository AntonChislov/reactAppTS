import React from "react";
import styles from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.profileInfo_header}>Профиль</div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHg_t3WBJBy4SEC_9uU-gi71PNXXdInw5uRQ&usqp=CAU'/>
            </div>
            <div>Антон Числов</div>
            <div>Статус</div>
            <div>Увлечения</div>
            <div>Контакты</div>
        </div>
    )
}