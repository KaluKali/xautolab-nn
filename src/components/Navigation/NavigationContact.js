import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationContact.css';
import logo from '../../assets/logonav.png';

const NavigationContact = () => (
  <div className='columns is-gapless is-vcentered has-background-black is-marginless is-family-secondary'>
    <div className='column is-2  centered'>
      <Link to={'/'}>
        <figure className='is-pulled-right-desktop-only'>
          <img src={logo} alt='logonav' width={100}/>
        </figure>
      </Link>
    </div>
    <div className='column has-text-centered'>
      <div id='demoFont' className='is-size-1 is-size-3-mobile'>автосервис</div>
    </div>
    <div className='column has-text-right-desktop has-text-centered-mobile is-3'>
      <label className='is-size-6 is-pulled-left-desktop-only '>
        <p className='has-text-white has-text-weight-bold'>г. Н. Новгород ул. Тимирязева, 11В</p>
        <p className='has-text-white has-text-weight-bold'>Без выходных</p>
        <a href='tel:+78312129691' className='has-text-weight-bold'>+7 (831) 212 96 91</a>
      </label>
    </div>
  </div>
);

export default NavigationContact;
