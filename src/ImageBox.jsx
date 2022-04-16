import React from "react";
import "./App.css";


function ImageBox(props) {
  
  function add() {                            //функция изменения состояния state
    props.childToParent(props.page);          //передаем нашу страницу родителю
    props.transfer(false);                    //передаем состояние нажатой кнопки "Information" родителю    
  } 
  
    return (
    <div>      
        <div className="image">
          <div><img src={props.page.Poster} alt="" /></div>
          <div>{props.page.Title}</div>
          <button onClick={add} style={{fontSize: "120%"}}>Information</button>        
        </div>
    </div>
  )
}

export default ImageBox;
