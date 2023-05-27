import './App.css';
import Board from './Componets/Board';
import { useState } from 'react';
import StopWatch from './Componets/StopWatch';

function App() {

  const [isRunning, setIsRunning] = useState(false);
  let [Gameend,setGameend] = useState(0);
  const [time, setTime] = useState(0);
  let [moves,setmoves] = useState(0);

  const startAndStop = () => {
    setGameend(0);
    setTime(0);
    setmoves(0);
    setIsRunning(!isRunning);
  };

  return (
    <div className="App">

      <div className='info'>
        
        <div onClick={startAndStop} className='start-btn'>Start</div>

        <StopWatch isRunning={isRunning} setIsRunning={setIsRunning} time={time} setTime={setTime}></StopWatch>

        <div className='font'>Moves: {moves}</div>

      </div>
      
      <Board setIsRunning={setIsRunning} isRunning={isRunning} Gameend={Gameend} setGameend={setGameend} time={time} moves={moves} setmoves={setmoves}></Board>
 
    </div>
  );
}

export default App;
