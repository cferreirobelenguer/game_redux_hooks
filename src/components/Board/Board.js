import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Square from './Square/Square';
import classes from './Board.module.css';
import checkLine from '../../utils/checkLine';
import isFull from '../../utils/isFull';
//import the actions
import {playingFalse,drawTrue,userPlaying,boardNew,playingTrue,drawFalse,userA,boardRestart} from '../store/actions';


const Board=()=>{

  //states with useSelector
  const playing=useSelector(state=>state.playing);
  const draw=useSelector(state=>state.draw);
  const user=useSelector(state=>state.user);
  const board=useSelector(state=>state.board);
  console.log(board);
  //dispatch the actions
  const dispatcher=useDispatch();
  const playingFalse_=()=>dispatcher(playingFalse());
  const drawTrue_=()=>dispatcher(drawTrue());
  const userPlaying_=()=>dispatcher(userPlaying());
  const boardNew_=()=>dispatcher(boardNew());
  const playingTrue_=()=>dispatcher(playingTrue());
  const drawFalse_=()=>dispatcher(drawFalse());
  const userA_=()=>dispatcher(userA());
  const boardRestart_=()=>dispatcher(boardRestart());



    useEffect(() => {
    const line = checkLine(board);
    const full = isFull(board);
    if(playing && line){
      playingFalse_()

    } else if (playing && full && !draw) {
      drawTrue_()
    }
  });

  const updateBoard = (x, y) =>{
    if(playing){
      const newArray = [...board];
      newArray[y][x] = user;
      userPlaying_()
      boardNew_();
      console.log('Si playing '+playing);
    }
    
  }

  const restartGame = () =>{
    playingTrue_();
    drawFalse_();
    userA_();
    boardRestart_();
  }


    const rows = board.map((row, rowIndex)=>{
      return row.map((square, sqIndex)=>{
        return <Square 
                  key={rowIndex+''+sqIndex} 
                  x={sqIndex} 
                  y={rowIndex} 
                  user={square} 
                  clicked={()=>updateBoard(sqIndex, rowIndex)}/>
      })
    })


    let winner = '';

    if(!playing){
      console.log('Si no playing '+playing);
      winner = (
        <div>
              
              <h1>{`User ${user === 'A' ? 'B' : 'A'} won the game`}</h1>
              <button onClick={restartGame}>Restart</button>
        </div>

      )
    }


    let isDraw = '';

    if(draw){
      isDraw = (
        <div>
              <h1>{`DRAW!!!!`}</h1>
              <button onClick={restartGame}>Restart</button>
        </div>

      )
    }

    return (
      <React.Fragment>
        <h2>USER: {user}</h2>
        <div className={classes.Board}>
          {rows}
        </div>
        {winner}
        {isDraw}
        
      </React.Fragment>
  
    )
  
  
}

export default Board;