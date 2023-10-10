import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

const diceIcons = [
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
];

function Dice() {
  const [diceNumber, setDiceNumber] = useState(1);

  function rollDice() {
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(newNumber);
  }

  return (
    <div>
      <FontAwesomeIcon icon={diceIcons[diceNumber - 1]} size="6x" />
      <br />
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default Dice;
