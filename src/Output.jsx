import React from "react";

function Output(props) {

  function back() {                     //функция возвращает назад к списку событий
    props.transfer(true);
  }
  
  function favorite() {
    props.getMi(props.theChosenEvent);
  }

  return (
    <div className="out">
        <div>
            <img className="image2" src={props.theChosenEvent.Poster} alt="" />
        </div>
        <div>
            {props.theChosenEvent.Title && <div className="divOut"><b>Title:</b> {props.theChosenEvent.Title}</div>}
            {props.theChosenEvent.Genre && <div className="divOut"><b>Genre:</b> {props.theChosenEvent.Genre}</div>}
            {props.theChosenEvent.Starring && <div className="divOut"><b>Starring:</b> {props.theChosenEvent.Starring}</div>}
            {props.theChosenEvent.Country && <div className="divOut"><b>Country:</b> {props.theChosenEvent.Country}</div>}
            {props.theChosenEvent.Time && <div className="divOut"><b>Time:</b> {props.theChosenEvent.Time}</div>}
            {props.theChosenEvent.Premiere && <div className="divOut"><b>Premiere:</b> {props.theChosenEvent.Premiere}</div>}
            {props.theChosenEvent.Description && <div className="divOut"><b>Description:</b> {props.theChosenEvent.Description}</div>}
            <div><button  onClick={back} style={{fontSize: "120%"}}>Back</button></div>
            <div><button onClick={favorite} style={{fontSize: "120%"}}>Favorite</button></div>
        </div>       
    </div>
  );
}

export default Output;



         
       