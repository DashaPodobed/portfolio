import React from 'react'
import style from './HomeWork.module.css'
import containerStyle from '../Common/Styles/containerStyle.module.scss'
import {Button} from "../Common/Components/Button/Button";


const HomeWork = () => {
    return (
        <div className={style.homeWorkBlock}>
            <div className={`${containerStyle.container} ${style.homeWorkContainer}`}>
                <h2 className={style.title}>{'Considering options working from home'}</h2>
                {/*<button className={style.button}>{"Hire me"}</button>*/}
                <Button text={'Hire me'}/>
            </div>
        </div>
    );
}

export default HomeWork;