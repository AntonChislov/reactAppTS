import React from "react";
import styles from './AddPost.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#968334',
        },
    },
});

export const AddPost = () => {
    return (
        <div className={styles.addpost}>
            <div className={styles.addpost_title}>
                Добавь пост
            </div>
            <ThemeProvider theme={theme}>
                <TextField color={"secondary"} size={"small"}/>
                <Button color={"secondary"} size={"medium"}>Добавить</Button>
            </ThemeProvider>
        </div>
    )
}