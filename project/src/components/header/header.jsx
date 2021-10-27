import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './header.module.scss';
import logo from '../../img/svg/logo.svg';
import Nav from '../nav/nav';

export default function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link
          className={styles.logo}
          to={AppRoute.MAIN}>
          <img
            className={styles.img}
            src={logo}
            alt='Логотип Avto-Moto' />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
