import { FC } from "react";

interface ViewOnGitHubButtonProps {
    url: string;
}

const ViewOnGitHubButton: FC<ViewOnGitHubButtonProps> = ({url}) => {
    return (
        <a href={url} className="w-full bg-transparent border border-white rounded-2xl">
            <div className="pt-4 pb-4 pl-6 pr-6 flex gap-4 justify-center">
                <p className="rounded-xl text-center font-bold text-2xl">View on GitHub</p>
                <img src='./icons/social-github.svg' alt="GitHub Logo"/>
            </div>
        </a>
    );
}

export default ViewOnGitHubButton;