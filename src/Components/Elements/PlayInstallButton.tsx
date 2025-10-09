import { FC } from "react";

interface PlayInstallButtonProps {
    className?: string;
    url: string;
}

const PlayInstallButton: FC<PlayInstallButtonProps> = ({className, url}) => {
    return (
        <div className={className}>
            <a href={url}>
            <img 
                src="/third_party/GooglePlayEnglish.png" 
                alt="Get it on Google Play button."
                />
            </a>
        </div>
        
    );
}

export default PlayInstallButton;