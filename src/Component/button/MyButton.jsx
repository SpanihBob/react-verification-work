import React from "react";             
import classes from './MyButton.module.css'

const MyButton = (props) => {           
    return (                   
        <button {...props}  className={classes.myBtn}>   
        {/* вставим дочерний элемент (надпись на кнопке ) через props */}
            {props.children}
        </button>                                     
    )
}
export default MyButton;