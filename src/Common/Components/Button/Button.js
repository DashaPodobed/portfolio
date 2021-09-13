import React from "react";
import style from "./Button.module.scss"
import {LinkComponent} from "../../../r0-Nav/Nav";

export const Button = (props) => {
    return (
        <div className={style.btn}>
            <LinkComponent path={'contacts'} title={"Hire me"}/>
        </div>
    )
}