import { FC, useEffect, useState, useCallback } from "react";

interface LifeGameProps {
    gameSpeed: number;              // Game Speed (ms)
    cellWidthPercentage: number;    // Width of each cell (percentage of viewport width)
    startAliveThreshold: number;             // The number of cells to start alive
}

// Function to calculate the next state of the grid based on Conway's rules
// This is a pure function, making it easy to test and reason about.
const calculateNextState = (currentStates: boolean[][], rows: number, cols: number): boolean[][] => {
    // Create a new grid for the next state, initialized to dead cells
    const nextStates: boolean[][] = Array.from({ length: rows }, () => 
        Array(cols).fill(false)
    );

    // Helper array for iterating over all 8 neighbors
    // [dy, dx] pairs for: Top-Left, Top, Top-Right, Left, Right, Bottom-Left, Bottom, Bottom-Right
    const neighbors = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
    ];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const isAlive = currentStates[i][j];
            let liveNeighbors = 0;

            // 1. Count live neighbors
            for (const [dy, dx] of neighbors) {
                // Calculate neighbor coordinates, using modulo (%) for toroidal (wrap-around) boundaries
                const neighborY = (i + dy + rows) % rows; // Add rows before modulo to handle negative indices
                const neighborX = (j + dx + cols) % cols;

                if (currentStates[neighborY][neighborX]) {
                    liveNeighbors++;
                }
            }

            // 2. Apply Conway's rules:
            
            // Rule 1 & 3: Loneliness and Overcrowding
            if (isAlive) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    nextStates[i][j] = false; // Dies (loneliness or overcrowding)
                } else {
                    nextStates[i][j] = true;  // Survives (2 or 3 live neighbors)
                }
            } 
            // Rule 4: Reproduction
            else {
                if (liveNeighbors === 3) {
                    nextStates[i][j] = true; // Comes to life (exactly 3 live neighbors)
                }
            }
        }
    }

    return nextStates;
};

const LifeGame: FC<LifeGameProps> = ({gameSpeed, cellWidthPercentage, startAliveThreshold}) => {

    const [mousePos, setMousePos] = useState({clientX: 0, clientY: 0});
    const [mouseIsInside, setMouseIsInside] = useState(true);
    const [gameBoardDimensions, setGameBoardDimensions] = useState({x: 0, y: 0});
    const [gameGridSize, setGameGridSize] = useState({x: 0, y: 0});

    const [cellStates, setCellStates] = useState([[false]]);
    const [cellSize, setCellSize] = useState({x: 0, y: 0});
    // Add a state to control the simulation running status
    const [isRunning, setIsRunning] = useState(true); 

    // Effect to Assemble the game grid (Original Logic)
    // Note: Converted calculateDimensions to useCallback for stability and added cellStates initialization
    const calculateDimensions = useCallback(() => {
        // Calculate NEW dimensions first (non-state variables)
        const newBoardDimensions = {
            x: window.innerWidth,
            y: window.innerHeight
        };

        // Calculate the total number of columns needed based on the target percentage
        const targetColumns = Math.max(1, Math.floor(1 / cellWidthPercentage)); 
        
        // Calculate the PERFECT cell width to tile the screen width
        const newCellSizeX = newBoardDimensions.x / targetColumns; 

        // Determine the IDEAL number of rows needed to keep the cells square
        const totalRows = Math.max(
            1, // Ensure totalRows is at least 1
            Math.round(newBoardDimensions.y / newCellSizeX)
        );
        
        // Calculate the PERFECT cell height to tile the screen height completely.
        const newCellSizeY = newBoardDimensions.y / totalRows;
            
        const newCellSize = {
            x: newCellSizeX,
            y: newCellSizeY
        }

        // Calculate NEW grid size based on NEW dimensions
        const newGridSize = {
            x: Math.floor(newBoardDimensions.x / newCellSize.x),
            y: Math.floor(newBoardDimensions.y / newCellSize.y)
        };

        // Create the NEW cell states array based on NEW grid size
        let newCellStatuses: boolean[][] = Array.from({ length: newGridSize.y }, () => 
            Array.from({ length: newGridSize.x }, () => Math.random() > startAliveThreshold)
        );
        
        // Update the cell states with the NEW array
        setGameBoardDimensions(newBoardDimensions);
        setGameGridSize(newGridSize);
        setCellSize(newCellSize);
        setCellStates(newCellStatuses);
    }, [cellWidthPercentage]);


    useEffect(() => {
        // We track the mouse position to generate our alive cells
        // during the game loop
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({
                clientX: event.clientX,
                clientY: event.clientY
            });
        }

        // We track weather or not the mouse is on the page to prevent false inputs
        const handleMouseEnter = () => { setMouseIsInside(true); }
        const handleMouseLeave = () => { setMouseIsInside(false); }
        
        // Add a handler to toggle simulation on spacebar
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                event.preventDefault(); // Prevent scrolling
                setIsRunning(prev => !prev);
            }
        };

        // When the app loads, calculate the game dimensions
        calculateDimensions();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', calculateDimensions);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('keydown', handleKeyDown);


        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', calculateDimensions);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [calculateDimensions]);


    // Handle Mouse Interaction (Birthing new cells when mouse over)
    // Only allow manual "birthing" when the simulation is *not* running
    useEffect(() => {
        if (!isRunning && mouseIsInside && cellSize.x > 0 && cellSize.y > 0) {
            // Calculate the grid coordinates from the mouse coordinate
            const colIndex = Math.floor(mousePos.clientX / cellSize.x);
            const rowIndex = Math.floor(mousePos.clientY / cellSize.y);

            // Check if the calculated indices are within the bounds of the grid
            if (
                rowIndex >= 0 && rowIndex < gameGridSize.y && 
                colIndex >= 0 && colIndex < gameGridSize.x
            ) {
                // Check if the cell is currently dead before updating
                if (!cellStates[rowIndex][colIndex]) {
                    // Use a functional update form to ensure we have the latest state for modification
                    setCellStates(prevCellStates => {
                        // Deep copy to ensure immutability
                        const newStates = prevCellStates.map(row => [...row]);
                        newStates[rowIndex][colIndex] = true;
                        return newStates;
                    });
                }
            }
        }
        // Dependencies: Added isRunning to the dependency array
    }, [mousePos, mouseIsInside, cellSize, gameGridSize, isRunning]);


    // 💻 Game Loop Effect
    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isRunning && gameGridSize.x > 0 && gameGridSize.y > 0) {
            intervalId = setInterval(() => {
                setCellStates(prevCellStates => {
                    return calculateNextState(
                        prevCellStates, 
                        gameGridSize.y, 
                        gameGridSize.x
                    );
                });
            }, gameSpeed);
        }

        // Cleanup function to clear the interval when the component unmounts or dependencies change
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
        // Dependencies: gameSpeed, gameGridSize, isRunning
    }, [gameSpeed, gameGridSize, isRunning]);


    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-10 leading-none">
             {/* Simple control display */}
             <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-red-700 bg-opacity-70 text-white p-2 rounded-b-md z-50">
                Simulation is: **{isRunning ? 'RUNNING' : 'PAUSED'}** (Press **SPACE** to {isRunning ? 'PAUSE' : 'RESUME'})
             </div>

            {cellStates.map((rows, rowIndex) => (
                // Changed to use flex for positioning, no need for row divs if using a single flex container and wrapping (but keeping current structure is fine)
                <div className="flex flex-row" key={rowIndex} style={{height: cellSize.y}}>
                    {rows.map((item, colIndex) => (
                        <div 
                        key={colIndex}
                        // Use flex-basis or calculated width/height on the cell itself
                        style={{width: cellSize.x, height: cellSize.y}}
                        className={`
                            m-0 p-0 z-20
                            border
                            ${cellStates[rowIndex][colIndex] 
                                // Conditional class for alive/dead
                                ? 'border-gray-200 border-opacity-20'
                                : 'border-transparent border-opacity-5'}`
                        }>{/* Removed cellStates[rowIndex][colIndex] text for cleaner visualization */}</div>
                    ))}
                </div>
            ))}
        </div>
    );

};

export default LifeGame;