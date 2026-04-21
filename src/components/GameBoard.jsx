
import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {   
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // };

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                console.log("row: ", row, " rowIndex: ", rowIndex),
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            console.log("playerSymbol: ", playerSymbol, " colIndex: ", colIndex),
                            <li key={colIndex}>
                                <button onClick={onSelectSquare}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
};