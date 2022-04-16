import React, {useState} from "react";
import ImageBox from "./ImageBox";
import Output from "./Output"

function Teatr(props) {

  //1) функция для получения обьекта события (функция "вернуть обьект" )                                                //  работает!!!
  const [parameter, setParameter]  = useState({});                         //при нажатии кнопки "Information" в ImageBox
  function returnAnObject(param){             //функция возвращает выбранный обьект события
    setParameter(param);
  }
  

  //2)получаем состояние кнопки "Information" (функция для получения состояния кнопки "Information")                    //  работает!!!
  const [myState, setMyState]  = useState(true);   
  function changeButtonStateInfo(state) {
    setMyState(state);
  }

  //3) получаем наше избранное событие из Output.jsx и передаем его в App.js
  function getSelectedEvent(myEvent) {
    props.childToParent(myEvent)
    }

  return (
    <div>
       <h3>Cinema</h3>
      <div className='imageBox'>
          {myState && props.post.performance.map(data => 
            <ImageBox page={data} key={data.id} childToParent={returnAnObject} transfer={changeButtonStateInfo}/> //передаем в пропсы callback для получения обьекта и состояния кнопки "Information"         
            )} 
          {!myState &&                                                             //передаем в пропсы callback для получения состояния кнопки "Information" и наш обьект события    
            <Output theChosenEvent={parameter} transfer={changeButtonStateInfo} getMi={getSelectedEvent} /> }    
      </div> 
    </div>
  );
}

export default Teatr;
