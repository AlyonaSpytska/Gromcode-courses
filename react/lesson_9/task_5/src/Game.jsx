import React, { useState } from 'react'
import Board from './Board'

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        // Определить был ли клик по ячейке или игра законченна
        if (winner || boardCopy[index]) return
        // Определить чей ход Х ? О
        boardCopy[index] = xIsNext ? 'X' : 'O'
        // Обновить state
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
      return (
        <button
          className="btn__start"
          onClick={() => setBoard(Array(9).fill(null))}
        >
          {" "}
          Очистить поле{" "}
        </button>
      );
    };



    return (
      <div className="wrapper">
        {startNewGame()}
        <Board squares={board} click={handleClick} />
        <p className="game-info">
          {winner
            ? "Победитель " + winner
            : "Сейчас ходит " + (xIsNext ? "X" : "O")}
        </p>
      </div>
    );
}

export default Game