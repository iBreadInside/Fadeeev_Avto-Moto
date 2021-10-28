import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavLinks } from '../../const';
import styles from './nav.module.scss';

const HEADER_NAV_LENGTH = 4;

export default function Nav({isFooter = false}) {
  const currentNavLinks = isFooter
    ? NavLinks.slice(HEADER_NAV_LENGTH, NavLinks.length)
    : NavLinks.slice(0, HEADER_NAV_LENGTH);

  return(
    <ul className={`${styles.list} ${isFooter ? styles.list__footer : ''}`}>
      {
        currentNavLinks.map(
          ({text, route}) => (
            <li
              key={text}
              className={styles.item}
            >
              <NavLink
                exact
                to={route}
                className={styles.link}
              >
                {text}
              </NavLink>
            </li>
          )
        )
      }
    </ul>
  );
}

Nav.propTypes = {
  isFooter: PropTypes.bool,
};
