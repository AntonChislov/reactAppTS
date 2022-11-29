import React from "react";
import styles from './DialogsList.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    id: number
    name: string
}

const DialogsItem: React.FC<DialogsItemType> = ({name, id}) => {
    return (
        <div className={styles.dialog_item}>
            <NavLink style={({ isActive }) => ({ color: isActive ? "azure" : ""})} to={'/dialogs/' + id} >{name}</NavLink>
        </div>
    )
}

export const DialogsList = () => {
    return (
        <div className={styles.dialogsList_block}>
            <div>
                <div className={styles.dialogsList_title}>
                    Диалоги
                </div>
                <DialogsItem id={1} name={'Оля'}/>
                <DialogsItem id={2} name={'Лена'}/>
                <DialogsItem id={3} name={'Вова'}/>
                <DialogsItem id={4} name={'Аркадий'}/>
                <DialogsItem id={5} name={'Полина'}/>
                <DialogsItem id={6} name={'Егор'}/>
            </div>
        </div>
    )
}