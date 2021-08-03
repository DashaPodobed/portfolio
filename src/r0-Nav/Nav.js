import React from 'react'
import style from './Nav.module.scss'
import {Link} from 'react-scroll'

const Nav = () => {
    const LinkComponent = (props) => {
        return (
            <Link
                activeClass={style.active}
                to={props.path}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >{props.title}
            </Link>
        )
    }
    return (
        <div className={style.nav}>
            <LinkComponent path={"home"} title={"Home"}/>
            <LinkComponent path={"skills"} title={"Skills"}/>
            <LinkComponent path={"projects"} title={"Projects"}/>
            <LinkComponent path={"contacts"} title={"Contacts"}/>
        </div>
    );
}

export default Nav;