//import './Lottery.css'
import React, { useState } from 'react';
import Ball from './Ball';

function Lottery(props) {
    const [nums, setNums] = useState(Array(props.maxBalls).fill(null));

    function generateRandomNumber() {
        return Math.floor(Math.random() * props.maxNum) + 1;
    }
    function handleClick() {
        const newNums = Array.from({ length: props.maxBalls }, generateRandomNumber);
        setNums(newNums);
    }

    return (
        <section>
            <h1>{props.title}</h1>
            <div>
                {nums.map((num) => (
                    <Ball num={num} />
                ))}
            </div>
            <button onClick={handleClick}>Generate Balls</button>
        </section>
    );
}

export default Lottery;