import React from 'react'
import style from './Profile.module.css'
import containerStyle from '../Common/Styles/containerStyle.module.scss'
import Block from "./Block";
import Title from "../Common/Components/Title/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faVk} from "@fortawesome/free-brands-svg-icons/faVk";


const Profile = () => {
    return (
        <div className={style.profileBlock}>
            <div className={`${containerStyle.container} ${style.profileContainer}`}>
                <Title title={"Daria Podobed"}/>
                <div className={style.blocksContainer}>
                    <Block icon={<FontAwesomeIcon icon={faInstagram}/>}/>
                    <Block icon={<FontAwesomeIcon icon={faLinkedin}/>}/>
                    <Block icon={<FontAwesomeIcon icon={faTelegram}/>}/>
                    <Block icon={<FontAwesomeIcon icon={faVk}/>}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;