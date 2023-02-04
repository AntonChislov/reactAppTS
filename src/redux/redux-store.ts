import {configureStore} from '@reduxjs/toolkit';
import {profileReducer} from './profileSlice';
import {dialogsReducer} from './dialogSlice';
import {usersReducer} from './usersSlice';

export const store = configureStore({
    reducer: {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        usersPage: usersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch