import React from 'react';
import s from "./Profile.module.css"
import ava from "./img/ava.jpeg"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
function Profile(props) {
    return (
        <div className={s.mainContent}>
            <div className={s.profile}>
                <ProfileInfo/>
            <MyPosts/>
        </div>
        </div>
    );
}

export default Profile;