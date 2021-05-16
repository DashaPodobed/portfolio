import React from 'react'
import style from './HomeWork.module.css'
import containerStyle from '../common/styles/containerStyle.module.css'


const HomeWork = () => {
    return (
        <div className={style.homeWorkBlock}>
            <div className={`${containerStyle.container} ${style.homeWorkContainer}`}>
                <h2 className={style.title}>{'Considering options working from home'}</h2>
                <button className={style.button}>{"Hire me"}</button>
            </div>
        </div>
    );
}

export default HomeWork;