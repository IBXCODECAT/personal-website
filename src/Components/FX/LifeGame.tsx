// FX Module for Conway's Game of Life!

import { useState } from "react";

// 1. Any live cell with less than two live neighbors dies
// 2. Any live cell with two or three live neighbors lives
// 3. Any live cell with more than three live neighbors dies
// 4. Any dead cell with three live neighbors becomes alive

const Generate2DArray = (rows: number, cols: number): boolean[][] => {
    
    // This line looks really complex, but it basically just generates and fills a 2D array
    let arr: boolean[][] = new Array(rows).fill(false).map(() => new Array(cols).fill(false));

    // Populate the boolean array with random values
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            arr[i][j] = (Math.random() < 0.5);
        }
    }

    // TODO: Remove debug code
    // console.table(arr);

    return arr;
}

const LifeGame = () => {

    const COLS = 4
    const ROWS = 8
    const CELL_SIZE = 30;
    const ALIVE_COLOR = "#00AA00";
    const DEAD_COLOR = "#FF0000";

    const [cellStates, setCellStates] = useState<boolean[][]>(() => 
        Generate2DArray(ROWS, COLS)
    );
    
    // Simple display for verification
    const liveCellsCount = cellStates.flat().length;

    return (
        <div className="w-screen h-screen">
            <table style={{ borderSpacing: '1px', backgroundColor: '#90A4AE' }}> 
                <tbody>
                    {/* Map over the outer array (rows) */}
                    {cellStates.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {/* Map over the inner array (cells/columns) */}
                            {row.map((isAlive, colIndex) => (
                                <td
                                    key={`${rowIndex}-${colIndex}`}
                                    style={{
                                        width: CELL_SIZE,
                                        height: CELL_SIZE,
                                        // Set the background color based on the cell's state
                                        backgroundColor: isAlive ? ALIVE_COLOR : DEAD_COLOR,
                                        border: '1px solid #CFD8DC'
                                    }}
                                >
                                    {''}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LifeGame;