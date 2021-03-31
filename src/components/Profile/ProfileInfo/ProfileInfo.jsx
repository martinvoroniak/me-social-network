import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={s.imges} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlN20Q44dNRp0IKjXwmAsdqvpNFBl6kvqbAQ&usqp=CAU' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.aboutMe}</div>
                <NavLink to={props.profile.contacts}>contacts</NavLink>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;