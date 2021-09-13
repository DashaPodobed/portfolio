import React from "react";
import style from ".//Profile.module.css"


const Block = (props) => {
    return (
        <div>
            <a href={props.href} className={style.block}>{props.icon}</a>
        </div>
    )
}

export default Block