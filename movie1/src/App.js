import React from 'react';
import Dice from './Dice';
import './App.css';
import Ball from './Ball';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <Dice />
      <Lottery title={'El lotto'} maxBalls={4} maxNum={12}/>
      <Lottery title={'El Maxilotto'} maxBalls={6} maxNum={50}/>
    </div>
  );
}

export default App;