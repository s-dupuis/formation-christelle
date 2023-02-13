import React from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import S from 'string';
import classNames from 'classnames';
import ColoredIcon from '../ColoredIcon';
const R = require('ramda');

const Menu = ({ items }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <ul className="f-menu">
      {
        R.compose(
          R.map(({ label, path, icon, showInMenu = true }, index) => (
            <li
              key={index}
              onClick={() => history.push(path)}
              className={classNames({ 'f-menu-item-selected': S(pathname).startsWith(path) })}
            >
              <ColoredIcon
                icon={icon}
                className="inline-block mx-1"
                color={'#ff41ae'}
              />

              {label}
            </li>
          )),
          R.filter(R.propEq('showInMenu', true))
        )(items)
      }

      <li className="profil-menu">
        <ul className="flex items-center">
          <li className={classNames('border-none inline-block', { 'f-menu-item-selected-text': S(pathname).startsWith('/monprofil') })} onClick={() => history.push('/monprofil')}><img src="/icons/profil.svg" className="float-left" />Mon profil</li>
          <li className="border-none inline-block">|</li>
          <li className={classNames('border-none inline-block', { 'f-menu-item-selected-text': S(pathname).startsWith('/faq') })} onClick={() => history.push('/faq')}>faq</li>
        </ul>
      </li>
    </ul>
  );
};

export default Menu;
