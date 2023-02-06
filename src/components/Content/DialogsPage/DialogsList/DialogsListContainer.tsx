import React from "react";
import styles from "./DialogsList.module.css";
import {DialogType} from "../../../../redux/state";
import {DialogsList} from './DialogsList';
import {connect} from 'react-redux';
import {AppStateType} from '../../../../redux/redux-store';

const MapStateToProps = (state: AppStateType) => ({
    dialogsData: state.dialogsPage.dialogsData
})

export const DialogsListContainer = connect(MapStateToProps)(DialogsList)