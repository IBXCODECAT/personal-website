import { FC, ReactNode } from 'react';

// 1. Modify the interface to accept href, target, and rel props
interface SocialIconProps {
  type: 'email' | 'github' | 'linkedin' | 'twitter';
  href: string;
}

const SocialIcon: FC<SocialIconProps> = ({
  type, 
  href
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
  }

  return (
    // Noopener and noreferrer for security reasons when using target="_blank"
    <a href={href} target="_blank" rel="noopener noreferrer">
      {Icon}
    </a>
  );
};

export default SocialIcon;