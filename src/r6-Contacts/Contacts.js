import React from 'react'
import style from './Contacts.module.scss'
import Title from "../Common/Components/Title/Title";
import Fade from 'react-reveal/Fade';
import axios from "axios";


const Contacts = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('https://smtp-project-server.herokuapp.com/sendMessage', {name, email, message})
            .then(res => {
                console.log('name:', name);
                console.log('email:', email);
                console.log('message:', message);
            })
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div id="contacts" className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title title={"Сontact me"}/>
                <Fade>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <input
                            placeholder="Name"
                            className={style.formArea}
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            placeholder="Email"
                            className={style.formArea}
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            placeholder="Message"
                            className={style.messageArea}
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button className={style.button} type="submit">Send</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts;