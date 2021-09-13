import React from 'react'
import style from './Profile.module.css'
import containerStyle from '../Common/Styles/containerStyle.module.scss'
import Block from "./Block";
import Title from "../Common/Components/Title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faVk} from "@fortawesome/free-brands-svg-icons/faVk";
import Fade from 'react-reveal/Fade';


const Profile = () => {
    return (
        <div className={style.profileBlock}>
            <div className={`${containerStyle.container} ${style.profileContainer}`}>
                <Title title={"Daria Podobed"}/>
                <Fade>
                    <div className={style.blocksContainer}>
                        <Block icon={<FontAwesomeIcon icon={faInstagram}/>} href={"https://www.instagram.com/daria_makarchik/?hl=ru"}/>
                        <Block icon={<FontAwesomeIcon icon={faLinkedin} />} href={"https://www.linkedin.com/in/darya-podobed-84969a213/"}/>
                        <Block icon={<FontAwesomeIcon icon={faTelegram}/>} href={"https://t.me/dasha_podobed"}/>
                        <Block icon={<FontAwesomeIcon icon={faVk}/>} href={"https://vk.com/id66740470"}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Profile;