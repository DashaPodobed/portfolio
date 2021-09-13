import React, {useState} from 'react'
import style from './BurgerNav.module.scss'
import {Link} from 'react-scroll'

const LinkBurgerNav = (props) => {
    return (
        <Link
            activeClass={style.active}
            to={props.link}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >{props.title}
        </Link>
    )
}

const BurgerNav = () => {
    let  [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
       setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={style.burgerNav} onBlur={console.log("onBlur")}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <LinkBurgerNav title={"Home"} link={"home"}/>
                <LinkBurgerNav title={"Skills"} link={"skills"}/>
                <LinkBurgerNav title={"Projects"} link={"projects"}/>
                <LinkBurgerNav title={"Contacts"} link={"contacts"}/>
            </div>
            <div onClick={onBurgerBtnClick} className={style.burgerBtn} ></div>
        </div>
    )
}

export default BurgerNav;