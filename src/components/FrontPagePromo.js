import React from 'react';

import './FrontPagePromo.css';
import { Link } from 'react-router-dom';
import { categoryMap } from '../db/categories';

const FrontPagePromo = () => (
  <section className="section front-promo">
    {
      categoryMap.map((row, irow) => (
        <div className="tile is-ancestor" key={irow}>
          {row.map((obj, i) => (
            <div className={`tile is-parent ${obj.size}`} key={i}>
              <Link
                to={obj.to}
                className={`tile has-text-white is-child notification front-promo__article front-promo__article--background-right ${obj.additional ? obj.additional : ''}`}
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)),url(${obj.img})` }}
              >
                <p className={`title is-size-4-mobile ${obj.fontAdditional ? obj.fontAdditional : ''}`}>{obj.name}</p>
              </Link>
            </div>)
          )}
        </div>
      ))
    }
  </section>
);

export default FrontPagePromo;
