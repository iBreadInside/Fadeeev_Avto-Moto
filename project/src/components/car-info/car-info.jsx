import React from 'react';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';
import styles from './car-info.module.scss';

const Car = {
  name: 'Марпех 11',
  details: {
    transmission: 'Роботизированная',
    power: 249,
    fuel: 'Бензиновый',
    drive: 'Полный',
    volume: 2.4,
    torque: '370/4500',
    cyl: 4,
  },
  fullPrice: '2 400 000',
  currentPrice: '2 300 000',
  credit: '11 000',
};

export default function CarInfo() {
  return(
    <section className={styles.car}>
      <h1 className={styles.content}>Информация об автомобиле</h1>

      <Slider />

      <div className='info'>
        <h2 className={styles.name}>{Car.name}</h2>

        <ul className={styles.details}>
          <li className={styles.details__item}>бензин</li>
          <li className={`${styles.details__item} ${styles.gearbox}`}>механика</li>
          <li className={`${styles.details__item} ${styles.power}`}>100 л.с.</li>
          <li className={`${styles.details__item} ${styles.volume}`}>1.4 л</li>
        </ul>

        <ul className={styles.prices}>
          <li className={styles.prices__current}>{Car.currentPrice} &#8381;</li>
          <li className={styles.prices__full}>{Car.fullPrice} &#8381;</li>
        </ul>

        <div className={styles.buttons}>
          <button className={styles.request}>оставить заявку</button>
          <button className={styles.credit}>в кредит от {Car.credit} &#8381;</button>
        </div>
      </div>

      <Tabs car={Car} />
    </section>
  );
}
