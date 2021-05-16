import React from 'react'
import style from './Profile.module.css'
import containerStyle from '../common/styles/containerStyle.module.css'
import Block from "./Block";


const Profile = () => {
    return (
        <div className={style.profileBlock}>
            <div className={`${containerStyle.container} ${style.profileContainer}`}>
                <h2>{"Daria Podobed"}</h2>
                <div className={style.blocksContainer}>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                </div>
                <p>{"© 2021 beingeorge, All Rights Reserved."}</p>
            </div>
        </div>
    );
}

export default Profile;