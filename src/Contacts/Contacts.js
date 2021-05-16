import React from 'react'
import style from './Contacts.module.css'
import containerStyle from '../common/styles/containerStyle.module.css'


const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${containerStyle.container} ${style.contactsContainer}`}>
                <h2 className={style.title}> {"Contacts"}</h2>
                    <form className={style.contactsForm}>
                        <input className={style.input}/>
                        <input className={style.input}/>
                        <textarea className={style.textarea}/>
                    </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;