import React from 'react';
import PropTypes from 'prop-types';

import IconTwitter from '../icons/twitter';
import IconGitHub from '../icons/github';
import IconLinkedin from '../icons/linkedin';
import IconCodepen from '../icons/codepen';
import IconExternal from '../icons/external';
import IconAppStore from '../icons/appstore';
import IconFolder from '../icons/folder';
import IconFork from '../icons/fork';
import IconInstagram from '../icons/instagram';
import IconLocation from '../icons/location';
import IconPlayStore from '../icons/playstore';
import IconStar from '../icons/star';
import IconZap from '../icons/zap';
import IconLogo from '../icons/logo';
import IconPhone from '../icons/phone';
import IconDevto from '../icons/devto';
import IconFrontend from '../icons/frontend';
import IconBackend from '../icons/backend';
import IconTooling from '../icons/tooling';

/* When Icon is called, the name of the SVG is passed in as props. 
We pass the name of the SVG in a switch statement which returns the 
matching Icon/IconName component. */

const Icon = ({ name }) => {
  switch (name) {
    case 'Twitter':
      return <IconTwitter />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Logo':
      return <IconLogo />;
    case 'Devto':
      return <IconDevto />;
    case 'Phone':
      return <IconPhone />;
    case 'Front-end':
      return <IconFrontend />;
    case 'Back-end':
      return <IconBackend />;    
    case 'Tooling':
      return <IconTooling/>; 
    case 'AppStore':
      return <IconAppStore />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;  
    case 'Instagram':
      return <IconInstagram />; 
    case 'Location':
      return <IconLocation />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Zap':
      return <IconZap />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;