import { useEffect, useState } from "react";

const CELL_SIZE = 32;

const LifeGame = () => {

    const [mousePos, setMousePos] = useState({pageX: 0, pageY: 0});
    const [mouseIsIsInside, setMouseIsInside] = useState(false);
    const [gameBoardDimensions, setGameBoardDimensions] = useState({x: 0, y: 0});
    const [gameGridSize, setGameBoardGridSize] = useState({x: 0, y: 0});

    const [cellStates, setCellStates] = useState([[false]]);

    useEffect(() => {
        // We track the mouse position to generate our alive cells
        // during the game loop
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({
                pageX: event.pageX,
                pageY: event.pageY
            }); 
        }

        const calculateDimensions = () => {
            // Calculate NEW dimensions first (non-state variables)
            const newBoardDimensions = {
                x: window.innerWidth,
                y: window.innerHeight
            };
            
            // Calculate NEW grid size based on NEW dimensions
            // Use Math.floor/ceil to ensure integer indices
            const newGridSize = {
                x: Math.floor(newBoardDimensions.x / CELL_SIZE),
                y: Math.floor(newBoardDimensions.y / CELL_SIZE)
            };

            // Update dimension and grid size state (will trigger a re-render)
            setGameBoardDimensions(newBoardDimensions);
            setGameBoardGridSize(newGridSize);
            
            // Create the NEW cell states array based on NEW grid size
            let newCellStatuses: boolean[][] = Array.from({ length: newGridSize.y }, () => 
                Array.from({ length: newGridSize.x }, () => Math.random() < 0.5)
            );
            
            // 5. Update the cell states with the NEW array
            setCellStates(newCellStatuses);
        }

        // We track weather or not the mouse is on the page to prevent false inputs
        const handleMouseEnter = (event: MouseEvent) => { setMouseIsInside(true); }
        const handleMouseLeave = (event: MouseEvent) => { setMouseIsInside(false); }

        // When the app loads, calculate the game dimensions
        calculateDimensions();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', calculateDimensions);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', calculateDimensions);
        }
    }, []);

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-10 leading-none">
            {cellStates.map((rows, rowIndex) => (
                <>
                    {rows.map((item, colIndex) => (
                        <div 
                        className={`
                            inline-block
                            h-8 w-8 z-20
                            m-0 p-0
                            border
                            leading-loose
                            ${cellStates[rowIndex][colIndex] 
                                ? 'border-gray-600 border-opacity-10'
                                : 'border-gray-200 border-opacity-30'}`
                        }>{cellStates[rowIndex][colIndex]}</div>
                    ))}
                </>
            ))}
        </div>
    );

};

export default LifeGame;