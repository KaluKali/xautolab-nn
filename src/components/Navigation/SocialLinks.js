import React from 'react';
import './NavigationContact.css';
import { Icon } from 'react-icons-kit';

import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { vk } from 'react-icons-kit/fa/vk';
import { instagram } from 'react-icons-kit/fa/instagram';

import { Link } from 'react-router-dom';

import './SocialLinks.css';

const SocialLinks = () => (
  <div className="columns has-background-black is-gapless is-vcentered pb-1 is-marginless">
    <div className="column has-text-right-desktop has-text-centered-mobile">
      <a href={'https://vk.com/xautolab'} className='pr-4 has-text-white has-background-black' target={'_blank'} rel={'noreferrer'}>
        <Icon size={20} icon={vk} />
      </a>
      <a href={'https://www.instagram.com/x_avtolab_nn'} className='pr-4 has-text-white' target={'_blank'} rel={'noreferrer'}>
        <Icon size={20} icon={instagram} />
      </a>
      <Link to={'/'} className='has-text-white'>
        <Icon size={20} icon={facebookSquare}/>
      </Link>
    </div>
    <div className='column is-1' />
  </div>
);

export default SocialLinks;
