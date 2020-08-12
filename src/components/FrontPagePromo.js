import React from 'react';

import './FrontPagePromo.css';

import { Link } from 'react-router-dom';
import dvc from '../assets/images/dvc.jpg';
import profdiag from '../assets/images/profdiag.jpg';
import mkppakpp from '../assets/images/mkppakpp.jpg';
import autoelect from '../assets/images/autoelect.jpg';
import slesrem from '../assets/images/slesrem.jpg';
import texobs from '../assets/images/mainback.jpg';
import rule from '../assets/images/rule.jpg';
import remtoplsys from '../assets/images/remtoplsys.jpg';
import remtormsys from '../assets/images/remtormsys.jpg';
import diagrempodv from '../assets/images/diagrempodv.jpg';
import remredrazd from '../assets/images/remredrazd.jpg';

const FrontPagePromo = () => (
  <section className="section front-promo">
    <div className="tile is-ancestor">
      <div className="tile is-parent is-3">
        <Link
          to={'/category/dvc'}
          className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${dvc})` }}
        >
          <p className="title is-size-4-mobile">Ремонт ДВС</p>
        </Link>
      </div>
      <div className="tile is-parent is-3">
        <Link
          to={'/category/remtoplsys'}
          className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${remtoplsys})` }}
        >
          <p className="title is-size-4-mobile">Ремонт топливной системы</p>
        </Link>
      </div>
      <div className="tile is-parent is-3">
        <Link
          to={'/category/mkppakpp'}
          className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${mkppakpp})` }}
        >
          <p className="title is-size-4-mobile">Ремонт АКПП/МКПП</p>
        </Link>
      </div>
      <div className="tile is-parent is-3">
        <Link
          to={'/category/texobs'}
          className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${remredrazd})` }}
        >
          <p className="title is-size-4-mobile">Ремонт раздаточных коробок и редукторов</p>
        </Link>
      </div>
    </div>

    <div className="tile is-ancestor">
      <div className="tile is-parent is-3">
        <Link
          to={'/category/texobs'}
          className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right pr-2"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${texobs})` }}
        >
          <p className="title">Техническое обслуживание</p>
        </Link>
      </div>
      <div className="tile is-parent is-3">
        <Link
          to={'/category/slesrem'}
          className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${slesrem})` }}
        >
          <p className="title">Слесарный ремонт</p>
        </Link>
      </div>
      <div className="tile is-parent is-3">
        <Link
          to={'/category/profdiag'}
          className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right pr-2"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${profdiag})` }}
        >
          <p className="title has-text-left is-4">Профессиональная диагностика</p>
        </Link>
      </div>
      <div className="tile is-parent is-3">
        <Link
          to={'/category/autoelect'}
          className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right pr-2"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${autoelect})` }}
        >
          <p className="title">Автоэлектрика</p>
        </Link>
      </div>
    </div>
    <div className="tile is-ancestor">
      <div className="tile is-parent is-6">
        <Link
          to={'/category/diagrempodv'}
          className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${diagrempodv})` }}
        >
          <p className="title is-size-4-mobile">Диагностика и ремонт подвески</p>
        </Link>
      </div>
      <div className="tile is-parent is-3">
        <Link
          to={'/category/diagremrule'}
          className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${rule})` }}
        >
          <p className="title is-size-4-mobile">Диагностика и ремонт рулевого управления</p>
        </Link>
      </div>
      <div className="tile is-parent is-3">
        <Link
          to={'/category/remtormsys'}
          className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${remtormsys})` }}
        >
          <p className="title is-size-4-mobile">Ремонт тормозной системы</p>
        </Link>
      </div>
    </div>
  </section>
);

export default FrontPagePromo;
