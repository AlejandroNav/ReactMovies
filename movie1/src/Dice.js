import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './Dice.css';
const diceIcons = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];

function Dice() {
    const [die, setDiceNumber] = useState(0);
    const [die2, setDiceNumber2] = useState(0);
    const [isRolling, setIsRolling] = useState(false);

    function rollDice() {
        setIsRolling(true);
        setTimeout(() => {
            const randomNumber1 = Math.floor(Math.random() * 6);
            const randomNumber2 = Math.floor(Math.random() * 6);
            setDiceNumber(randomNumber1);
            setDiceNumber2(randomNumber2);
            setIsRolling(false);
        },1500); // Tiempo de espera de 2 segundos.
    }

    return (
        <div className='RollDice'>
            <FontAwesomeIcon icon={diceIcons[die]} className={`customDiceIcon ${isRolling ? 'rolling' : ''}`} />
            <FontAwesomeIcon icon={diceIcons[die2]} className={`customDiceIcon ${isRolling ? 'rolling' : ''}`} />
            <button onClick={rollDice} disabled={isRolling}>
                {isRolling ? "Rolling..." : "Roll Dice"}
            </button>
        </div>
    );
}

export default Dice;