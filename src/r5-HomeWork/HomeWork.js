import React from 'react'
import style from './HomeWork.module.scss'
import containerStyle from '../Common/Styles/containerStyle.module.scss'
import {Button} from "../Common/Components/Button/Button";

const HomeWork = () => {

    return (
        <div id="homeWork" className={style.homeWorkBlock}>
            <div className={`${containerStyle.container} ${style.homeWorkContainer}`}>
                <h2 className={style.title}>{'Considering options working from home'}</h2>
                <Button text={"Hire me"}/>
            </div>
        </div>
    );
}

export default HomeWork;