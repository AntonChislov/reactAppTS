import React from "react";
import styles from './ProfileInfo.module.css'
import {UserProfileData} from '../../../../redux/profile-reducer';

type ProfileInfoProps = {
    profile: UserProfileData
}

function ProfileInfo({profile}: ProfileInfoProps) {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.profileInfo_header}>Профиль</div>
            <div>
                <img src={profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHg_t3WBJBy4SEC_9uU-gi71PNXXdInw5uRQ&usqp=CAU'}/>
            </div>
            <div>{profile.fullName}</div>
            <div>{profile.aboutMe}</div>
            <div>{profile.lookingForAJobDescription}</div>
            <div>
                Контакты:
                <div>{profile.contacts.instagram}</div>
                <div>{profile.contacts.facebook}</div>
                <div>{profile.contacts.mainLink}</div>
                <div>{profile.contacts.youtube}</div>
                <div>{profile.contacts.github}</div>
                <div>{profile.contacts.vk}</div>
            </div>
        </div>
    )
}

export {ProfileInfo}