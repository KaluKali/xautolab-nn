import dvc from '../assets/dvc.jpg';
import profdiag from '../assets/profdiag.jpg';
import mkppakpp from '../assets/mkppakpp.jpg';
import autoelect from '../assets/autoelect.jpg';
import slesrem from '../assets/slesrem.jpg';
import texobs from '../assets/mainback.jpg';
import diagremrule from '../assets/rule.jpg';
import remtoplsys from '../assets/remtoplsys.jpg';
import remtormsys from '../assets/remtormsys.jpg';
import diagrempodv from '../assets/diagrempodv.jpg';
import remredrazd from '../assets/remredrazd.jpg';

const categoryNames = {
  dvc: {
    name: 'Ремонт ДВС', size: 'is-3', to: '/category/dvc', img: dvc
  },
  mkppakpp: {
    name: 'Ремонт АКПП/МКПП', size: 'is-3', to: '/category/mkppakpp', img: mkppakpp
  },
  profdiag: {
    name: 'Профессиональная диагностика', size: 'is-3', to: '/category/profdiag', img: profdiag, additional: 'pr-2', fontAdditional: 'has-text-left is-4'
  },
  autoelect: {
    name: 'Автоэлектрика', size: 'is-3', to: '/category/autoelect', img: autoelect, additional: 'pr-2'
  },
  texobs: {
    name: 'Техническое обслуживание', size: 'is-3', to: '/category/texobs', img: texobs, additional: 'pr-2'
  },
  slesrem: {
    name: 'Слесарный ремонт', size: 'is-3', to: '/category/slesrem', img: slesrem
  },
  remtormsys: {
    name: 'Ремонт тормозной системы', size: 'is-3', to: '/category/remtormsys', img: remtormsys
  },
  remtoplsys: {
    name: 'Ремонт топливной системы', size: 'is-3', to: '/category/remtoplsys', img: remtoplsys
  },
  remredrazd: {
    name: 'Ремонт раздаточных коробок', size: 'is-3', to: '/category/remredrazd', img: remredrazd
  },
  diagrempodv: {
    name: 'Диагностика и ремонт подвески', size: 'is-6', to: '/category/diagrempodv', img: diagrempodv
  },
  diagremrule: {
    name: 'Диагностика и ремонт рулевого управления', size: 'is-3', to: '/category/diagremrule', img: diagremrule
  }
};

export const categoryMap = [
  [categoryNames.dvc, categoryNames.remtoplsys, categoryNames.mkppakpp, categoryNames.remredrazd],
  [categoryNames.texobs, categoryNames.slesrem, categoryNames.profdiag, categoryNames.autoelect],
  [categoryNames.diagrempodv, categoryNames.diagremrule, categoryNames.remtormsys]
];

export default categoryNames;
