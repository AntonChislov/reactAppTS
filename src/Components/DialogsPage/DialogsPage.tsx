import React from "react";
import styles from './DialogsPage.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#968334',
        },
    },
})



const AddMessage = () => {
    return (
        <div className={styles.addmessage}>
            <ThemeProvider theme={theme}>
                <TextField label="Введи текст" color={"secondary"} size={"small"}/>
                <Button color={"secondary"} size={"medium"}>Отправить</Button>
            </ThemeProvider>
        </div>
    )
}

export const DialogsPage = () => {
    return (
        <div>
            <div className={styles.dialogs_block}>
                <div>
                    <div className={styles.item2}>есть такое</div>
                    <div className={styles.item1}>тоже, непонятно нифига</div>
                    <div className={styles.item2}>да, а ты?</div>
                    <div className={styles.item1}>учишь React?</div>
                    <div className={styles.item2}>и тебе привет</div>
                    <div className={styles.item1}>привет</div>
                </div>
            </div>
            <AddMessage/>
        </div>
    )
}