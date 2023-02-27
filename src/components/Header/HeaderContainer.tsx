import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import { Header } from './Header';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {authAPI} from '../../api/api';

class HeaderContainer extends React.Component<any, AppStateType>{
    componentDidMount() {
        authAPI.authMe()
        .then((response) => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                this.props.setAuthUserData(id, login, email)
            }
        }).catch(error => console.warn(error))
    }

    render() {
        return <Header data={this.props.data}/>
    }

    
}

const MapStateToProps = (state: AppStateType) => ({
    data: state.auth
})

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer)