import React from 'react'
import style from './Header.module.css'
import Nav from "../r0-Nav/Nav";
import BurgerNav from "../r0-Nav/BurgerNav/BurgerNav";

const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
}

export default Header;