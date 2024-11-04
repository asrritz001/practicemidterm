import React, { useState } from 'react';
import './Home.css';

function Home() {
    const [guess, setGuess] = useState('');
    const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1);
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    const handleInput = (e) => {
        setGuess(e.target.value);
    };

    const handleGuess = () => {
        const num = parseInt(guess, 10);  
        if (isNaN(num)) {
            setMessage('Please enter a valid number');
            return;
        }
        if (num === random) {
            setMessage('Correct!');
        } else if (num > random) {
            setMessage('Too high');
        } else {
            setMessage('Too low');
        }
        setAttempts(attempts + 1);
    };

    const handleResetGame = () => {
        setGuess('');
        setRandom(Math.floor(Math.random() * 100) + 1);
        setAttempts(0);
        setMessage('');
    };

    return (
        <div>
            <h1>Welcome to the Guess the Number Game!</h1>
            <div>
                <p>Guess a number between 1 and 100</p>
                <input
                    type="text"
                    name="guess"
                    value={guess}
                    onChange={handleInput}
                    placeholder="Enter your guess"
                />
                <button onClick={handleGuess}>Submit</button>
                <button onClick={handleResetGame}>Reset</button>
            </div>
            <p>Message: {message}</p>
            <p>Attempts: {attempts}</p>
        </div>
    );
}

export default Home;
