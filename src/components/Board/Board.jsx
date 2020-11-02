import React from 'react';

import './Board.css'
import Cell from '../Cell/Cell';


const Board = () => {

    const cellValues = ['X','X','X','O','O','X','O','',''];
    const winningCombination = [0,4,8];

    const cells = cellValues.map((value, index) => {
        const highlight = winningCombination && winningCombination.indexOf(index) >= 0;
        
        return <Cell
                key={index}
                value={value}
                highlight={highlight}
                />  
    })

    return (
        <div id="board">
            {cells}
        </div>
    );
}

export default Board;
