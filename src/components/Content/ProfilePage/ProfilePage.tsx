import React from "react";
import styles from './ProfilePage.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsBlockContainer} from "./PostsBlock/PostsBlockContainer";
import {connect} from 'react-redux';
import axios from 'axios';
import {AppStateType} from '../../../redux/redux-store';
import {setUserProfile, UserProfileData} from '../../../redux/profile-reducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from 'react-router-dom';

type MapStateToPropsType = {
    profile: UserProfileData
}

type ProfilePageType = {
    profile: UserProfileData
    setUserProfile: (value: UserProfileData) => void
    router?: {location: string, navigate: string, params: {userId: string}}
}

function withRouter(Component: any) {
    return function ComponentWithRouterProp(props: ProfilePageType) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
}

class ProfilePage extends React.Component<ProfilePageType, AppStateType> {
    componentDidMount() {
        let userId: string
        if (!this.props.router) {
            userId = '2'
        } else {
            userId = this.props.router.params.userId
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
            this.props.setUserProfile(res.data)
        })
    }

    render() {
        return (
            <div className={styles.profilePage}>
                <ProfileInfo profile={this.props.profile} />
                <PostsBlockContainer/>
            </div>
        );
    }
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.userProfile
})

export default connect(MapStateToProps, {setUserProfile})(withRouter(ProfilePage))