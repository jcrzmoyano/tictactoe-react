import React from 'react';

import './Board.css'
import Cell from '../Cell/Cell';


const Board = (props) => {

    const cells = props.cellValues.map((value, index) => {
        const highlight = props.winningCombination && props.winningCombination.indexOf(index) >= 0;

        return <Cell
            key={index}
            value={value}
            highlight={highlight}
            onClick={() => props.cellClicked(index)}
        />
    })

    return (
        <div id="board">
            {cells}
        </div>
    );
}

export default Board;
