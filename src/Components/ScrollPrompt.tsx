const ScrollPrompt = () => {
    return (
        <div className="-translate-y-16 flex flex-row justify-center items-center">
            <a href="#content">
                <div className="animate-bounce">
                    <svg fill="#FFFFFF" width="32px" height="32px" viewBox="0 0 24 24" id="double-down-sign"
                        data-name="Flat Color" xmlns="http://www.w3.org/2000/svg">
                        <path id="primary"
                            d="M2.13,4.51A1,1,0,0,1,3,4a1,1,0,0,1,.49.13L12,8.86l8.51-4.73a1,1,0,0,1,1,1.74l-9,5a1,1,0,0,1-1,0l-9-5A1,1,0,0,1,2.13,4.51Zm18.38,8.62L12,17.86,3.49,13.13A1,1,0,0,0,3,13a1,1,0,0,0-.49,1.87l9,5a1,1,0,0,0,1,0l9-5a1,1,0,1,0-1-1.74Z"
                        ></path>
                    </svg>
                </div>
            </a>
        </div>
    );
}

export default ScrollPrompt;