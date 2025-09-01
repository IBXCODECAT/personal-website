import React from 'react';
import { FaTwitter, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IconType } from 'react-icons';

// 1. Modify the interface to accept href, target, and rel props
interface SocialIconProps extends React.SVGProps<SVGSVGElement> {
  type: 'twitter' | 'youtube' | 'github' | 'linkedin' | 'instagram';
  href?: string;
  target?: string;
  rel?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ 
  type, 
  href, 
  target = "_blank", // Set a default target for external links
  rel = "noopener noreferrer", // A good practice for security with target="_blank"
  ...rest 
}) => {
  let IconComponent: IconType | undefined;

  switch (type) {
    case 'twitter':
      IconComponent = FaTwitter;
      break;
    case 'youtube':
      IconComponent = FaYoutube;
      break;
    case 'github':
      IconComponent = FaGithub;
      break;
    case 'linkedin':
      IconComponent = FaLinkedin;
      break;
    case 'instagram':
      IconComponent = AiFillInstagram;
      break;
  }

  if (!IconComponent) {
    return null;
  }

  const icon = <IconComponent {...rest} />;

  // 3. Conditionally wrap the icon in an anchor tag if href is provided
  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {icon}
      </a>
    );
  }

  // If no href is provided, just return the icon
  return icon;
};

export default SocialIcon;