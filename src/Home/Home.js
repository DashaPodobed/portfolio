import React from 'react'
import style from './Home.module.css'
import styleContainer from '../common/styles/containerStyle.module.css'

const Home = () => {
    return (
        <div className={style.homeBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hey There</span>
                    <h1>I am Darya Podobed</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Home;