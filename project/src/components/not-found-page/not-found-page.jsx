import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './not-found-page.module.scss';

export default function NotFoundPage() {
  return(
    <div className={styles.page}>
      <Header />
      <section className={styles.notFound}>
        <p className={styles.message}>Простите, эта страница пока не доступна!</p>
      </section>
      <Footer />
    </div>
  );
}
