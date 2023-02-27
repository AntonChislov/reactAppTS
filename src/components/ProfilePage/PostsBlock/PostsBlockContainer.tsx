import React from 'react';
import {Dispatch} from 'redux';
import {
    addPostButtonActionCreator,
    onPostChangeActionCreator,
    ProfilePageDataType
} from '../../../redux/profile-reducer';
import {PostsBlock} from './PostsBlock';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';

type MapStateType = {
    profilePageData: ProfilePageDataType
}

type MapDispatchType = {
    onAddPost: () => void
    onPostChange: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profilePageData: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        onAddPost: () => {
            dispatch(addPostButtonActionCreator())
        },
        onPostChange: (text: string) => {
            dispatch(onPostChangeActionCreator(text))
        }
    }
}

export const PostsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(PostsBlock)