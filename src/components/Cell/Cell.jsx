import React from 'react';
import classNames from 'classnames';

import './Cell.css'

const Cell = (props) => {

    const cellClass = classNames({
        cell: true,
        winner: props.highlight
    })

    const cellContentClass = classNames({
        'cell-content': true,
        populated: props.value
    })

    return (
        <button className={cellClass} onClick={props.onClick}>
            <span className={cellContentClass}>{props.value}</span>
        </button>
    );
}

export default Cell;