import React from "react";
import {addPostButtonActionCreator, onPostChangeActionCreator} from "../../../../redux/profile-reducer";
import {ProfilePageDataType} from '../../../../redux/state'
import {PostsBlock} from "./PostsBlock";

interface PostsBlockPropsType {
    profilePageData: ProfilePageDataType
    dispatch: (action: any) => void
}

function PostsBlockContainer({profilePageData, dispatch}: PostsBlockPropsType) {

    const addPostButton = () => {
        dispatch(addPostButtonActionCreator())
    }

    const onPostChange = (text: string) => {
        if(text) dispatch(onPostChangeActionCreator(text))
    }

    return <PostsBlock profilePageData={profilePageData} onAddPost={addPostButton} onPostChange={onPostChange}/>
}

export {PostsBlockContainer}