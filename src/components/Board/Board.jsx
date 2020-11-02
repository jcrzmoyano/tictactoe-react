import React from 'react';

import Cell from '../Cell/Cell';

import './Board.css'

const Board = () => {
    return (
        <div id="board">
            <Cell value="X" highlight={true} />
            <Cell value="X" highlight={true} />
            <Cell value="X" highlight={true} />
            <Cell value="X" highlight={false} />
            <Cell value="X" highlight={false} />
            <Cell value="O" highlight={false} />
            <Cell value="O" highlight={false} />
            <Cell value="O" highlight={false} />
            <Cell value="X" highlight={false} />
        </div>
    );
}

export default Board;
