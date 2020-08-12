import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label is-italic">Имя</label>
              <div className="control">
                <input className="input" type="text" placeholder="Имя" />
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label is-italic">Email</label>
              <div className="control ">
                <input className="input" type="email" placeholder="Email" />
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label is-italic">Сообщение</label>
          <div className="control">
            <textarea className="textarea" placeholder="Ваше обращение" />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" /> Принимаю условия{' '}
                  <Link to="/terms">которых нет</Link>
                </label>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Отправить</button>
              </div>
              <div className="control">
                <button className="button is-text">Отмена</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
