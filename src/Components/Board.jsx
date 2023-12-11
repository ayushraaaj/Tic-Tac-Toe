import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setXTurn] = useState(true);

    const handleClick = (index) => {
        if(state[index] !== null){
            return;
        }

        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : '0';

        setState(copyState);
        setXTurn(!isXTurn);
    }

    const checkWinner = () => {
        const possibleWinners = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for(let i of possibleWinners){
            const [a, b, c] = i;

            if(state[a] === null) continue;
            
            if(state[a] === state[b] && state[b] === state[c]){
                return state[a];
            }
        }
    }

    const winner = checkWinner();

    const resetGame = () => {
        setState(Array(9).fill(null));
    }

    return (
        <div className="board-container">
            {
                winner ? <h1>{winner} is Winner <br /><button onClick={resetGame}>Play Again</button></h1> : <>
                <h2>Player {isXTurn ? 'X' : '0'}&#39;s move</h2>
                <div className="board-row">
                    <Square click={() => handleClick(0)} text={state[0]} />
                    <Square click={() => handleClick(1)} text={state[1]} />
                    <Square click={() => handleClick(2)} text={state[2]} />
                </div>

                <div className="board-row">
                    <Square click={() => handleClick(3)} text={state[3]} />
                    <Square click={() => handleClick(4)} text={state[4]} />
                    <Square click={() => handleClick(5)} text={state[5]} />
                </div>

                <div className="board-row">
                    <Square click={() => handleClick(6)} text={state[6]} />
                    <Square click={() => handleClick(7)} text={state[7]} />
                    <Square click={() => handleClick(8)} text={state[8]} />
                </div> </>
            }
        </div>
    );
}

export default Board;