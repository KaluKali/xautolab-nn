import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavigationContact.css';
import logo from '../../assets/images/logonav.png';

class NavigationContact extends Component {
  render() {
    return (
      <div className='columns is-gapless is-vcentered'>
        <div className='column is-3 is-centered'>
          <Link to={'/'}>
            <figure className='is-pulled-right-desktop-only has-text-centered'>
              <img src={logo} alt='logonav' width={300} height={300}/>
            </figure>
          </Link>
        </div>
        <div className='column has-text-centered-mobile has-text-right'>
          <label className='is-size-6'>
            <Link to={'/autoservice'}>
              <strong className='has-text-danger'><u>Автосервис</u></strong>
            </Link>
          </label>
        </div>
        <div className='column has-text-centered'>
          <label className='is-size-6'>
            <Link to={'/price'}>
              <strong className='has-text-danger'><u>Прайс</u></strong>
            </Link>
          </label>
        </div>
        <div className='column has-text-centered'>
          <label className='is-size-6'>
            <Link to={'/category/profdiag'}>
              <strong className='has-text-danger'><u>Проф. диагностика</u></strong>
            </Link>
          </label>
        </div>
        <div className='column has-text-centered'>
          <label className='is-size-6'>
            <Link to={'/contact'}>
              <strong className='has-text-danger'><u>Контакты</u></strong>
            </Link>
          </label>
        </div>
        <div className='column has-text-right-desktop has-text-centered-mobile is-3 '>
          <label className='is-size-6 is-pulled-left-desktop-only'>
            <p><strong>г. Н. Новгород ул. Тимирязева, 11В</strong></p>
            <p><strong>Без выходных</strong></p>
            <a href='tel:+78312129691'><strong>+7 (831) 212 96 91</strong></a>
          </label>
        </div>
      </div>

    );
  }
}

export default NavigationContact;
