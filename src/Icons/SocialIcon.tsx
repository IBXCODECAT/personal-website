import { FC, ReactNode } from 'react';

// 1. Modify the interface to accept href, target, and rel props
interface SocialIconProps {
  type: 'email' | 'github' | 'linkedin' | 'twitter' | 'youtube';
  href?: string;
  target?: string;
  rel?: string;
}

const SocialIcon: FC<SocialIconProps> = ({
  type, 
  href,
  target = "_blank", // Set a default target for external links
  rel = "noopener noreferrer", // A good practice for security with target="_blank"
}) => {
  let Icon: ReactNode;

  switch (type) {
    case 'email':
      Icon = <img src='/icons/social-mail.svg' alt='Email Logo'/>;
      break;
    case 'github':
      Icon = <img src='/icons/social-github.svg' alt='GitHub Logo'/>;
      break;
    case 'linkedin':
      Icon = <img src='/icons/social-linkedin.svg' alt='LinkedIn Logo'/>;
      break;
    case 'twitter':
      Icon = <img src='/icons/social-twitter.svg' alt='Twitter Logo'/>;
      break;
    case 'youtube':
      break;
  }

  if (!Icon) {
    return <div/>;
  }


  // 3. Conditionally wrap the icon in an anchor tag if href is provided
  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {Icon}
      </a>
    );
  }

  // If no href is provided, just return the icon
  return (
    <div>
      {Icon}
    </div>
  );
};

export default SocialIcon;