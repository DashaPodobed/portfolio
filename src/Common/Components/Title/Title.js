import React from "react";
import style from "./Title.module.scss"

const Title = (props) => {
    return (
        <div className={style.title}>
            <h4>{props.title}</h4>
        </div>
    )
}
export default Title;