import React from 'react'
import style from './Contacts.module.scss'
import Title from "../Common/Components/Title/Title";
import Fade from 'react-reveal/Fade';


const Contacts = () => {
    return (
        <div id="contacts" className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title title={"Contacts"}/>
                <Fade bottom>
                    <form className={style.form}>
                        <input type="text" className={style.formArea} placeholder="Name"/>
                        <input type="text" className={style.formArea} placeholder="e-mail"/>
                        <textarea className={style.messageArea} placeholder="Message"/>
                        <button className={style.button}>Send</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts;