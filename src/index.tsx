import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export interface PostsType {
    id: number
    text: string
    like: number
}

const postsData: Array<PostsType> = [
    {id: 1, text: 'учу реакт!!! летим', like: 3},
    {id: 2, text: 'дорога возникает под ногами идущего', like: 5},
    {id: 3, text: 'нормально делай - нормально будет', like: 2},
    {id: 4, text: 'настроение огонь', like: 34},
]

export interface MessageType {
    id: number
    message: string
}

const incomeMessagesData: Array<MessageType> = [
    {id: 4, message: 'здаров'},
    {id: 2, message: 'все круто'},
]

const outgoMessagesData: Array<MessageType> = [
    {id: 5, message: 'привет'},
    {id: 3, message: 'как дела?'},
    {id: 1, message: 'харош'},
]

export interface DialogType {
    id: number
    dialogs: string
}

const dialogsData: Array<DialogType> = [
    {id: 1, dialogs: 'Анжелика'},
    {id: 2, dialogs: 'Сюзанна'},
    {id: 3, dialogs: 'Андрей'},
    {id: 4, dialogs: 'Руслан'},
    {id: 5, dialogs: 'Жанна'},
]

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogsData={dialogsData} outgoMessagesData={outgoMessagesData} incomeMessagesData={incomeMessagesData}
                 postsData={postsData}/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
