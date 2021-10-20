import React from 'react';
import Nav from '../nav/nav';
import styles from './footer.module.scss';

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Nav isFooter />
      </div>
    </footer>
  );
}
