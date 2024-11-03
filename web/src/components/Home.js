import React,{ useState } from 'react';
import './Home.css';

function Home() {
    const [guess, setGuess] = useState('');
const [random, setRandom] = useState(10);
const [message, setMessage] = useState('');
const[attempts, setAttempts] = useState(0);

const handleInput = (e) => {
    setGuess(e.target.value);
}
 const handleGuess = (e) => {
    const num=parseInt(guess,10);
    setGuess(num);
    if(num===random){
        setMessage('Correct');
    }
    else if(num>random){
        setMessage('Too high');
    }
    else{
        setMessage('Too low');
    }  
    setAttempts(attempts+1);

}

const handleResetgame = () => {
  setGuess('');
  setRandom(Math.floor(Math.random()*100));
  setAttempts(0);
  setMessage('');
    
}
    return (
      <div>
        <h1>Welcome to guess the number game!!!!!!!!!!</h1>
        <div>
            <p>Guess a number between 1 and 100</p>
            <input type="text"
             name='guess' 
             value={guess}
             id='guess' 
             onChange={(e) => setGuess(e.target.value)}
             placeholder="Enter your guess"/>
            <button onClick={handleGuess}>Submit</button>
            <button onClick={handleResetgame}>Reset</button>
        </div>
        <p> message: {message}</p> <p> attempts: {attempts}</p>
      </div>  
    );
} 
export default Home;