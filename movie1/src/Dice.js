import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
const diceIcons = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];

function Dice() {
    const [diceNumber, setDiceNumber] = useState(0);
    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6);
        setDiceNumber(randomNumber);
    }

    return (
        <div>
            <FontAwesomeIcon icon={diceIcons[diceNumber]} className="customDiceIcon" /> <br />
            <button onClick={rollDice}>Roll Dice</button>
        </div>
    );
}

export default Dice;
