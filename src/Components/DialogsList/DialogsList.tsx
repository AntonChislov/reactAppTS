import React from "react";
import styles from './DialogsList.module.css';

export const DialogsList = () => {
    return (
        <div className={styles.dialogsList_block}>
            <div>
                <div className={styles.dialogsList_title}>
                    Диалоги
                </div>
                <div>Оля</div>
                <div>Лена</div>
                <div>Вова</div>
                <div>Аркадий</div>
                <div>Егор</div>
                <div>Полина</div>
                <div>Петр</div>
            </div>
        </div>
    )
}