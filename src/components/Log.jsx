import { useState } from "react";


export default function Log() {

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                console.log("row: ", row, " rowIndex: ", rowIndex),
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            console.log("playerSymbol: ", playerSymbol, " colIndex: ", colIndex),
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
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