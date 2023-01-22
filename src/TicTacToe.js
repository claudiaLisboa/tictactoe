
import  { useState, useEffect } from 'react';
import './TicTacToe.css';

function TicTacToe() {
  const emptyBoard = Array(9).fill("");

  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index)=>{
    if(winner){
      console.log("Fim de Jogo!");
      return null;
    } 

    if(board[index] !== ""){
      console.log("Posição ocupada!");
      return null;
    } 

    setBoard(board.map((item, itemIndex) => itemIndex ===index ? currentPlayer : item));
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }


}

export default TicTacToe;
