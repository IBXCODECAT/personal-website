// FX Module for Conway's Game of Life!

import { useEffect, useState } from "react";

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

// Custom hook for tracking window dimensions
const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,    
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        // Hook resize handler into resize event
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []); // [] is an empty dependency ensuring effect only runs on mount and unmount

    return windowDimensions;
}

const LifeGame = () => {
    const CELL_SIZE_PX = 30;
    const { width, height } = useWindowDimensions();

    const dynamicCols = Math.floor(width / CELL_SIZE_PX);
    const dynamicRows = Math.floor(height / CELL_SIZE_PX);

    const ALIVE_COLOR = "#009900";
    const DEAD_COLOR = "#AA0000";

    const [cellStates, setCellStates] = useState<boolean[][]>(() => 
        Generate2DArray(dynamicRows, dynamicCols)
    );
    
    useEffect(() => {
        // Only run if the calculated dimensions are valid
        if (dynamicRows > 0 && dynamicCols > 0) {
            setCellStates(Generate2DArray(dynamicRows, dynamicCols));
            console.log(`Grid re-generated: ${dynamicRows}x${dynamicCols}`);
        }
    }, [dynamicRows, dynamicCols]); // Recalculate when rows or cols change!

    return (
        <div className="flex flex-col items-center w-screen h-screen p-4">
            <table style={{ 
                borderSpacing: '1px', 
                backgroundColor: '#90A4AE',
                margin: '0 auto', // Center the table
                flexShrink: 1, // Allows the table to shrink if necessary
                overflow: 'auto'
            }}> 
                <tbody>
                    {cellStates.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((isAlive, colIndex) => (
                                <td
                                    key={`${rowIndex}-${colIndex}`}
                                    style={{
                                        width: CELL_SIZE_PX,
                                        height: CELL_SIZE_PX,
                                        backgroundColor: isAlive ? ALIVE_COLOR : DEAD_COLOR,
                                        border: '1px solid #CFD8DC',
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