import React from 'react'
import style from './Skills.module.css'
import containerStyle from '../common/styles/containerStyle.module.css'
import Skill from "./Skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${containerStyle.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={"React"} description={"types of texts and interactive exercises that practise , to get "}/>
                    <Skill title={"JS"} description={"the reading skills you need to do well in your studies,"}/>
                    <Skill title={"CSS"} description={"ahead at work and to communicate in English"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;