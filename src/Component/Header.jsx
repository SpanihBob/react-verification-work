import React from "react";
import MyButton from './button/MyButton';
import '../App.css';
import { useState } from 'react';

function Header() {
  const [film, watchAFilm] = useState(false);
  const [spectacle, watchASpectacle] = useState(false);
  const [music, watchAMusic] = useState(false);

  const addCinema = (event) => {
    event.preventDefault();
    watchAFilm(true)
  }
  const addPerformance = (event) => {
    event.preventDefault();
    watchASpectacle(true)
  }
  const addConcert = (event) => {
    event.preventDefault();
    watchAMusic(true)
  }

  return (
    <div className="header">
        <div>
            <h1 className="headerH1">Афиша Ижевска</h1>
        </div>
        <form action="">
            <MyButton onClick={addCinema}>Cinema</MyButton>    
            <MyButton onClick={addPerformance}>Performance</MyButton>
            <MyButton onClick={addConcert}>Concert</MyButton>
        </form>
    </div>
  );
}

export default Header;
