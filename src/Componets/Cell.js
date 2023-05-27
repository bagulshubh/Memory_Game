import React from 'react';

function Cell(props) {
  let timeoutId;
  const obj = props.obj;
  const img = obj.img;
  const state = obj.state;
  const Fboard = props.Fboard;
  const setBoard = props.setBoard;
  const firstimg = props.firstimg;
  const secondimg = props.secondimg;
  const setfirstimg = props.setfirstimg;
  const setsecondimg = props.setsecondimg;
  const setGameend = props.setGameend;
  let Gameend = props.Gameend;
  let isRunning = props.isRunning;
  let setIsRunning = props.setIsRunning;
  let moves = props.moves;
  let setmoves = props.setmoves;

  const stateHandler = () => {

    let cnt = moves;
    setmoves(cnt+1);

    if(isRunning===false){
      setIsRunning(true);
    }

    if (firstimg === null) {
      setfirstimg(obj);
      const not = [...Fboard];
      not[obj.i][obj.j].state = true;
      setBoard(not);
     
    } 
    else if (secondimg === null) {
      setsecondimg(obj);
      const not = [...Fboard];
      not[obj.i][obj.j].state = true;
      setBoard(not);

      timeoutId = setTimeout(checkForSimilar,1000);

    }
  };

  const checkForSimilar = () => {
    if (firstimg.img === obj.img) {
        clearTimeout(timeoutId);
        const not = [...Fboard];
        not[firstimg.i][firstimg.j].state = true;
        not[obj.i][obj.j].state = true;
        setfirstimg(null);
        setsecondimg(null);
        setBoard(not);
        let cnt = Gameend;
        setGameend(cnt+2);
    }
    else {
        const not = [...Fboard];
        not[firstimg.i][firstimg.j].state = false;
        not[obj.i][obj.j].state = false;
        setfirstimg(null);
        setsecondimg(null);
        setBoard(not);
    }
  };

  return (
    <div className="cell" onClick={stateHandler}>
      {state === true ? (
        <img src={img} className="cell-img" alt="Cell" />
      ) : (
        <div className="black"></div>
      )}
    </div>
  );
}

export default Cell;
