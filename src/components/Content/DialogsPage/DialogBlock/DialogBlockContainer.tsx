import React from 'react';
import {Dispatch} from 'redux';
import {addMessageActionCreator} from '../../../../redux/dialogs-reducer';
import {MessageType} from '../../../../redux/state';
import {DialogBlock} from './DialogBlock';
import {connect} from 'react-redux';
import {AppStateType} from '../../../../redux/redux-store';

type MapStateType = {
    incomeMessagesData: Array<MessageType>
    outgoMessagesData: Array<MessageType>
}

type MapDispatchType = {
    sendMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        incomeMessagesData: state.dialogsPage.incomeMessagesData,
        outgoMessagesData: state.dialogsPage.outgoMessagesData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        sendMessage: (text: string) => {
            dispatch(addMessageActionCreator(text))
        }
    }
}

export const DialogBlockContainer = connect(mapStateToProps, mapDispatchToProps)(DialogBlock)
