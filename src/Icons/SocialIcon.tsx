import React from 'react';
import { FaTwitter, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IconType } from 'react-icons';

interface SocialIconProps extends React.SVGProps<SVGSVGElement> {
  type: 'twitter' | 'youtube' | 'github' | 'linkedin' | 'instagram';
}

const SocialIcon: React.FC<SocialIconProps> = ({ type, ...rest }) => {
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

  return <IconComponent {...rest} />;
};

export default SocialIcon;