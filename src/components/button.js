import React from "react"
import style from "../pages/button.module.css"

const Button = (props) => (
    <button className={style.button}>{props.content}</button>
)

export default Button