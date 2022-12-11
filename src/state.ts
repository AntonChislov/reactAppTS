let renderAll = () => {
    console.log('Hello World!')
}

export interface PostsType {
    id: number
    text: string
    like: number
}

export interface MessageType {
    id: number
    message: string
}

export interface DialogType {
    id: number
    dialogs: string
}

export interface ProfilePageDataType {
    postsData: Array<PostsType>
    textInput: string
}

export interface DialogsPageDataType {
    incomeMessagesData: Array<MessageType>
    outgoMessagesData: Array<MessageType>
    dialogsData: Array<DialogType>
}

export const store = {
    _state: {
        profilePageData: {
            postsData: [
                {id: 1, text: 'учу реакт!!! летим', like: 3},
                {id: 2, text: 'дорога возникает под ногами идущего', like: 5},
                {id: 3, text: 'нормально делай - нормально будет', like: 2},
                {id: 4, text: 'настроение огонь', like: 34},
            ],
            textInput: ''
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
    },
    getState: function() {
        return this._state
    },
    _subscribe(observer: () => void) {
        renderAll = observer
    },
    dispatch(action: any) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                text: action.postText,
                like: 0
            }
            this._state.profilePageData.postsData.push(newPost)
            this._state.profilePageData.textInput = ''
            renderAll()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePageData.textInput = action.currentValueInput
            renderAll()
        }
    }
}