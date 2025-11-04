import { FC, useEffect, useState } from "react";

interface LifeGameProps {
    gameSpeed: number;              // Game Speed (ms)
    cellWidthPercentage: number;    // Width of each cell (percentage of viewport width)
}

const LifeGame: FC<LifeGameProps> = ({gameSpeed, cellWidthPercentage}) => {

    const [mousePos, setMousePos] = useState({clientX: 0, clientY: 0});
    const [mouseIsInside, setMouseIsInside] = useState(true);
    const [gameBoardDimensions, setGameBoardDimensions] = useState({x: 0, y: 0});
    const [gameGridSize, setGameGridSize] = useState({x: 0, y: 0});

    const [cellStates, setCellStates] = useState([[false]]);
    const [cellSize, setCellSize] = useState({x: 0, y: 0});

    // Effect to Assemble the game grid
    useEffect(() => {
        // We track the mouse position to generate our alive cells
        // during the game loop
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({
                clientX: event.clientX,
                clientY: event.clientY
            });
        }

        const calculateDimensions = () => {
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
                Array.from({ length: newGridSize.x }, () => Math.random() > 0.9)
            );
            
            // 5. Update the cell states with the NEW array
            setGameBoardDimensions(newBoardDimensions);
            setGameGridSize(newGridSize);
            setCellSize(newCellSize);
            setCellStates(newCellStatuses);
        }

        // We track weather or not the mouse is on the page to prevent false inputs
        const handleMouseEnter = (event: MouseEvent) => { setMouseIsInside(true); }
        const handleMouseLeave = (event: MouseEvent) => { setMouseIsInside(false); }

        // When the app loads, calculate the game dimensions
        calculateDimensions();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', calculateDimensions);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', calculateDimensions);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, []);

    // Handle Mouse Interaction (Birthing new cells when mouse over)
    useEffect(() => {
        // Only update the grid if the mouse is inside the window
        if (mouseIsInside && cellSize.x > 0 && cellSize.y > 0) {
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
                    // Create a copy of the cellStates array to update
                    setCellStates(prevCellStates => {
                        // Deep copy to ensure immutability
                        const newStates = prevCellStates.map(row => [...row]);
                        newStates[rowIndex][colIndex] = true;
                        return newStates;
                    });
                }
            }
        }
        // Dependencies: mouse position, whether mouse is inside, dimensions
        // and the current cell states.
    }, [mousePos, mouseIsInside, cellSize, gameGridSize]);

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-10 leading-none">
            {cellStates.map((rows, rowIndex) => (
                <div className="flex flex-row">
                    {rows.map((item, colIndex) => (
                        <div 
                        style={{width: cellSize.x, height: cellSize.y}}
                        className={`
                            m-0 p-0 z-20
                            border
                            ${cellStates[rowIndex][colIndex] 
                                ? 'border-gray-200 border-opacity-30'
                                : 'border-gray-600 border-opacity-5'}`
                        }>{cellStates[rowIndex][colIndex]}</div>
                    ))}
                </div>
            ))}
        </div>
    );

};

export default LifeGame;