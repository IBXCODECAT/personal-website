import { useEffect, useState } from "react";

const LifeGame = () => {

    const [mousePos, setMousePos] = useState({pageX: 0, pageY: 0});
    const [mouseIsIsInside, setMouseIsInside] = useState(false);
    const [gameBoardDimensions, setGameBoardDimensions] = useState({x: 0, y: 0});
    const [gameGridSize, setGameGridSize] = useState({x: 0, y: 0});

    const [cellStates, setCellStates] = useState([[false]]);
    const [cellSize, setCellSize] = useState({x: 0, y: 0});

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
            
            const newCellSize = {
                x: Math.floor(newBoardDimensions.x * 0.05),
                y: Math.floor(newBoardDimensions.y * 0.05)
            }

            // Calculate NEW grid size based on NEW dimensions
            const newGridSize = {
                x: Math.floor(newBoardDimensions.x / newCellSize.x),
                y: Math.floor(newBoardDimensions.y / newCellSize.y)
            };

            // Create the NEW cell states array based on NEW grid size
            let newCellStatuses: boolean[][] = Array.from({ length: newGridSize.y }, () => 
                Array.from({ length: newGridSize.x }, () => Math.random() < 0.9)
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
                <div className="flex flex-row">
                    {rows.map((item, colIndex) => (
                        <div 
                        style={{width: cellSize.x, height: cellSize.y}}
                        className={`
                            m-0 p-0 z-20
                            border
                            ${cellStates[rowIndex][colIndex] 
                                ? 'border-gray-600 border-opacity-5'
                                : 'border-gray-200 border-opacity-30'}`
                        }>{cellStates[rowIndex][colIndex]}</div>
                    ))}
                </div>
            ))}
        </div>
    );

};

export default LifeGame;