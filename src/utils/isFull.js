const isFull = (board) => {

  let boardIsFull = true;
  board.forEach((row)=>{
    if(row.find((item)=>item===null) === null){
      boardIsFull=false;
    }
  })
    
  return boardIsFull;
}

export default isFull;