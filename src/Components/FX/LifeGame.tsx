import { useEffect, useState } from "react";

const LifeGame = () => {

    const [mousePos, setMousePos] = useState({clientX: 0, clientY: 0});
    const [mouseIsIsInside, setMouseIsInside] = useState(false);

    useEffect(() => {
        // We track the mouse position to generate our alive cells
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({
                clientX: event.pageX,
                clientY: event.pageY
            });
        }

        // We track weather or not the mouse is on the page to prevent false inputs
        const handleMouseEnter = (event: MouseEvent) => { setMouseIsInside(true); }
        const handleMouseLeave = (event: MouseEvent) => { setMouseIsInside(false); }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, [mousePos.clientX, mousePos.clientY]);

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-pink-600 opacity-50 z-10">
            
        </div>
    );

};

export default LifeGame;