import React from 'react'
import style from './Skills.module.css'
import containerStyle from '../Common/Styles/containerStyle.module.scss'
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCss3, faJs, faReact} from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';

const Skills = () => {
    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <Fade>
                <Title title={"My skills"}/>
                </Fade>
                <Fade bottom>
                    <div className={style.skills}>
                        <Skill title={"React"} icon={<FontAwesomeIcon icon={faReact}/>}
                               description={"types of texts and interactive exercises that practise , to get "}/>
                        <Skill title={"JS"} icon={<FontAwesomeIcon icon={faJs}/>}
                               description={"the reading skills you need to do well in your studies,"}/>
                        <Skill title={"CSS"} icon={<FontAwesomeIcon icon={faCss3}/>}
                               description={"ahead at work and to communicate in English"}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Skills;