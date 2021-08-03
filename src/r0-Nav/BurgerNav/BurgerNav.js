import React, {useState} from 'react'
import style from './BurgerNav.module.scss'
import {Link} from 'react-scroll'

const BurgerNav = () => {
    let  [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
       setMenuIsOpen(!menuIsOpen)
        console.log(menuIsOpen)
    }

    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link
                    activeClass={style.active}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Home
                </Link>
                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Skills
                </Link>
                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Projects
                </Link>
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Contacts
                </Link>
            </div>
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}></div>
        </div>
    )
}

export default BurgerNav;