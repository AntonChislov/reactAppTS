import {combineReducers, legacy_createStore } from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from './users-reducer';

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)