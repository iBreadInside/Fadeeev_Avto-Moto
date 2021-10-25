import React from 'react';
import CarInfo from '../car-info/car-info';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main-page.module.scss'

export default function MainPage() {

  return(
    <div className={styles.page}>
      <Header />
      <CarInfo />
      <Footer />
    </div>
  );
}
