
import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSquare }) {   
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    console.log("gameBoard: ", gameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        // console.log("rowIndex: ", rowIndex, " colIndex: ", colIndex);
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = "X";
            return updatedBoard;
        });

        onSelectSquare();
    };

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                    // console.log("row: ", row, " rowIndex: ", rowIndex)
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            // console.log("playerSymbol: ", playerSymbol, " colIndex: ", colIndex),
                            <li key={colIndex}>
                                <button 
                                    onClick={() => handleSelectSquare(rowIndex, colIndex)}
                                >
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