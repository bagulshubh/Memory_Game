import React from 'react'
import img1 from '../Assets/apple.png'
import img2 from '../Assets/cherry.png'
import img3 from '../Assets/mango.png'
import img4 from '../Assets/orange.png'
import img5 from '../Assets/some (1).png'
import img6 from '../Assets/something.png'
import img7 from '../Assets/straberry.png'
import img8 from '../Assets/watermelon.png'


import Cell from './Cell'
import { useState,useEffect } from 'react'

const Board = (props) => {

    let time = props.time;

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

   let moves = props.moves;
   let setmoves = props.setmoves;

    let ele = [img1,img2,img3,img4,img5,img6,img7,img8,img1,img2,img3,img4,img5,img6,img7,img8];

    let setIsRunning = props.setIsRunning; 
    let isRunning = props.isRunning;
    let Gameend = props.Gameend;
    let setGameend = props.setGameend;

    const rows = 4;
    const columns = 4;

    // Initializing a 2D array
    let [Fboard,setBoard] = useState([]);
    let [firstimg,setfirstimg] = useState(null);
    let [secondimg,setsecondimg] = useState(null);
    let m = moves;

   
    let board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        
        for (let j = 0; j < columns; j++) {
            // Set values for each element in the 2D array
            board[i][j] = i * columns + j;
            
        }
    }

    function getRandomNumber(n) {
        return Math.floor(Math.random() * n);
    }

    const newBoard = ()=>{

        for(let i = 0;i<4;i++){
            for(let j = 0;j<4;j++){
                let ind = getRandomNumber(ele.length);
                board[i][j] = {
                    i:i,
                    j:j,
                    img:ele[ind],
                    state:false,
                }
                ele.splice(ind, 1);
            }
        }

        setBoard(board);
    }

    useEffect(()=>{
        newBoard();
    },[isRunning]);

    if(Gameend===16){
        
        setIsRunning(false);
    }
      

  return (
    <div className='board'>
      
        {

            Gameend===16 ? (
                <div className='end'>

                    <div>Game End</div>
                    <div>Time : {hours}:{minutes}:{seconds}:{milliseconds}</div>
                    <div>Moves : {m}</div>

                </div>
            ):(
                Fboard.map((row)=>{
                
                return(
                    row.map((obj)=>{
                        return(
                            <Cell obj={obj} Fboard={Fboard} setBoard={setBoard} firstimg={firstimg} secondimg={secondimg} setfirstimg={setfirstimg} setsecondimg={setsecondimg} setGameend={setGameend} Gameend={Gameend} setIsRunning={setIsRunning} isRunning={isRunning}moves={moves} setmoves={setmoves}></Cell>
                        )
                    })
                    
                )
            
            })
            )


            
        }

    </div>
  )
}

export default Board
