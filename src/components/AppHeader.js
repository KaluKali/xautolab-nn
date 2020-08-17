import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { phoneHangUp } from 'react-icons-kit/icomoon/phoneHangUp';
import { creditCard } from 'react-icons-kit/icomoon/creditCard';
import { pigMoney } from 'react-icons-kit/metrize/pigMoney';
import { gears } from 'react-icons-kit/fa/gears';
import { user } from 'react-icons-kit/ikons/user';
import { award } from 'react-icons-kit/feather/award';
import { ic_access_time } from 'react-icons-kit/md/ic_access_time';

import './AppHeader.css';
import { Icon } from 'react-icons-kit';
import backgroundImage from '../assets/images/mainback.jpg';
import logo from '../assets/images/logo.png';

const IDLE = 1;
const SENT_REQ = 2;
const ERR_FORMAT = 3;
const LOADING = 4;

class AppHeader extends Component {
  state = {
    number: '',
    isLoading: IDLE,
  };

  onCallBack = (e) => {
    e.preventDefault();
    if (/^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/.test(this.state.number)) {
      this.setState({ isLoading: LOADING });
      axios({
        method: 'POST', url: 'http://kalukali.pw:3000/', headers: { number: this.state.number }
      })
        .then(() => this.setState({ isLoading: SENT_REQ }))
        .catch(() => this.setState({ isLoading: SENT_REQ }));
    } else {
      this.setState({ isLoading: ERR_FORMAT });
    }
  };

  handleFormChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const biggerHeroClass = this.props.location.pathname === '/' && 'is-medium';
    return (
      <section
        className={`hero ${biggerHeroClass} is-primary`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.35)), url(${backgroundImage})`,
        }}
      >
        <div className="hero-body">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-6 is-vertical is-parent">
                <div className="has-text-left has-text-centered-mobile pb-4">
                  <figure className='img_header img_header_mobile'>
                    <img src={logo} alt={'appheader_image'}/>
                  </figure>
                  <p className='title'>Cервис по ремонту <strong className="has-text-danger">иномарок</strong><br/>
                    в Нижнем Новгороде</p>
                </div>
                <div className="columns">
                  <div className="column">
                    <Icon size={24} icon={ic_access_time} />
                    <label className='has-text-weight-bold'> Скорость работы</label>
                    <div className="columns is-mobile">
                      <div className="column">
                        <br/>
                        <Icon size={24} icon={award} />
                        <label className='has-text-weight-bold'> Гарантия до 1 года</label>
                        <div className={'columns'}>
                          <div className="column">
                            <br/>
                            <Icon size={24} icon={gears} />
                            <label className='has-text-weight-bold'> Оригинальные запчасти</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <Icon size={24} icon={user} />
                    <label className='has-text-weight-bold'> Профессиональные мастера</label>
                    <div className="columns is-mobile">
                      <div className="column">
                        <br/>
                        <Icon size={24} icon={pigMoney} />
                        <label className='has-text-weight-bold'> Разумные цены</label>
                        <div className={'columns'}>
                          <div className="column">
                            <br/>
                            <Icon size={24} icon={creditCard} />
                            <label className='has-text-weight-bold'> Наличный и безналичный расчет</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-parent is-2">

              </div>
              <div className="tile is-parent">
                <div className="tile is-child box">
                  <div className="columns is-gapless">
                    <div className="column is-9 has-text-justified has-text-centered-mobile">
                      <label className="label has-text-black">Введите номер телефона<br/>мы перезвоним вам в течении <p className="has-text-danger">15 секунд</p></label>
                    </div>
                    <div className="column">
                      <button className={'has-background-white has-text-white wishlist-button centered '}>
                        <Icon className={'wishlist-button__icon has-text-danger'} size={24} icon={phoneHangUp} />
                      </button>
                    </div>
                  </div>
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input
                        value={this.state.number}
                        onChange={this.handleFormChange}
                        className="input is-rounded"
                        type="tel"
                        name="number"
                        id="number"
                        placeholder="Номер телефона"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"/>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"/>
                      </span>
                    </p>
                  </div>
                  <br/>
                  <div className="field">
                    <p className="control ">
                      {
                        this.state.isLoading === LOADING ? (<button className="button is-danger is-rounded is-fullwidth is-loading">
                        </button>)
                          : this.state.isLoading === SENT_REQ ? (<button className="button is-danger is-rounded is-fullwidth" disabled>
                          Запрос отправлен
                          </button>)
                            : this.state.isLoading === ERR_FORMAT ? (<button className="button is-danger is-rounded is-fullwidth" onClick={this.onCallBack}>
                          Неверный формат номера
                            </button>) : (
                              <button className="button is-danger is-rounded is-fullwidth" onClick={this.onCallBack}>
                              Перезвоните мне
                              </button>)
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(AppHeader);
