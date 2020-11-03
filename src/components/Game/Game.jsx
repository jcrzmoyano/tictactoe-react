import React, { useState } from 'react';

import './Game.css'
import Board from '../Board/Board';
import ResultOverlay from '../ResultOverlay/ResultOverlay';
import { calculateWinner } from '../../utils/WinnerCalc';


const Game = () => {

  const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [turnsLeft, setTurnsLeft] = useState(9);
  const [winner, setWinner] = useState();
  const [winningCombination, setWinningCombination] = useState([]);

  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

  const restartGame = () => {
    setCellValues(['', '', '', '', '', '', '', '', ''])
    setXIsNext(true)
    setIsGameOver(false)
    setTurnsLeft(9);
    setWinner(undefined)
    setWinningCombination([])
  }

  const onCellClicked = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues]
      newCellValues[cellIndex] = xIsNext ? 'X' : 'O'

      const updatedTurnLeft = turnsLeft - 1;

      //Calculate the result
      const calcResult = calculateWinner(newCellValues, updatedTurnLeft, cellIndex)

      setCellValues(newCellValues)
      setXIsNext(!xIsNext)
      setIsGameOver(calcResult.hasResult)
      setTurnsLeft(updatedTurnLeft);
      setWinner(calcResult.winner)
      setWinningCombination(calcResult.winningCombination)
    }
  }

  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellValues={cellValues}
          winningCombination={winningCombination}
          cellClicked={onCellClicked}
        />
      </div>
      <ResultOverlay
        isGameOver={isGameOver}
        winner={winner}
        onNewGameClicked={restartGame}
      />
    </>
  );
}

export default Game;