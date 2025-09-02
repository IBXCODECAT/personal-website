import SocialIcon from "../Icons/SocialIcon";

const Footer = () => {
    return (
        <footer className="p-8 bg-green-600">

            <div className="flex flex-col justify-between h-full">
                <a href="https://localhost:3000">LINK0 - </a>
                <div className="flex flex-row justify-center gap-4">
                    <SocialIcon type='email' href="mailto:example@example.com" className="text-white size-10"/>
                    <SocialIcon type="github" href="https://github.com/IBXCODECAT" className="text-white size-10"/>
                    <SocialIcon type="linkedin" href="https://www.linkedin.com/in/ibx-nathan/." className="text-white size-10"/>
                    <SocialIcon type="twitter" href="https://x.com/ibxcodecat" className="text-white size-10"/>
                </div>
            </div>
            <strong>
                <p className="flex flex-row justify-center text-gray-200 pt-8">
                    Copyright &copy; 2025 - Nathan Schmitt
                </p>
            </strong>
        </footer>
    );
}

export default Footer;