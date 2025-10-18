import { FC } from "react";

interface ViewOnGitHubButtonProps {
    url: string;
}

const ViewOnGitHubButton: FC<ViewOnGitHubButtonProps> = ({ url }) => {
  return (
    // The outer anchor tag acts as a flexible container
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      // Base styles: Transparent background, white border, rounded, and text color
      className="
        w-full
        inline-flex items-center justify-center 
        bg-transparent border-2 border-white 
        rounded-xl 
        text-white 
        font-semibold 
        text-base sm:text-lg 
        p-3 md:p-4
        transition-all duration-200 ease-in-out
        hover:bg-white/10 hover:shadow-lg
        shadow-md
      "
    >
      <span className="mr-3 text-2xl sm:text-xl">
        View on GitHub
      </span>
      {/* GitHub Icon: Use w-6/h-6 for size */}
      <img src='/icons/social-github.svg' alt="GitHub Logo" className="w-6 h-6 flex-shrink-0" />
    </a>
  );
};

export default ViewOnGitHubButton;