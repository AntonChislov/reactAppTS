
export interface PostsType {
    id: number
    text: string
    like: number
}

const postsData: Array<PostsType> =

export interface MessageType {
    id: number
    message: string
}

const

const

export interface DialogType {
    id: number
    dialogs: string
}

const

const state = {
    profilePageData: {
        postsData: [
            {id: 1, text: 'учу реакт!!! летим', like: 3},
            {id: 2, text: 'дорога возникает под ногами идущего', like: 5},
            {id: 3, text: 'нормально делай - нормально будет', like: 2},
            {id: 4, text: 'настроение огонь', like: 34},
        ]
    },
    dialogsPageData: {
        incomeMessagesData: [
            {id: 4, message: 'здаров'},
            {id: 2, message: 'все круто'},
        ],
        outgoMessagesData: [
            {id: 5, message: 'привет'},
            {id: 3, message: 'как дела?'},
            {id: 1, message: 'харош'},
        ],
        dialogsData: [
            {id: 1, dialogs: 'Анжелика'},
            {id: 2, dialogs: 'Сюзанна'},
            {id: 3, dialogs: 'Андрей'},
            {id: 4, dialogs: 'Руслан'},
            {id: 5, dialogs: 'Жанна'},
        ]
    }
}