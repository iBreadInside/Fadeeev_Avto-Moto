import React from 'react';
import styles from './contacts.module.scss';

export default function Contacts() {
  return(
    <section className={styles.contacts}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.type}>Адрес</p>
          <address className={styles.info}>
            <p className={styles.info}>Санкт-Петербург,</p>
            <p className={styles.info}>набережная реки Карповки, дом&nbsp;5</p>
          </address>
        </li>
        <li className={styles.item}>
          <p className={styles.type}>Режим работы</p>
          <p className={styles.info}>Ежедневно, с&nbsp;10:00 до&nbsp;21:00</p>
        </li>
        <li className={styles.item}>
          <p className={styles.type}>Телефон</p>
          <a
            className={styles.info}
            href='tel:8800333-55-99'
          >
            8 (800) 333-55-99
          </a>
        </li>
        <li className={styles.item}>
          <p className={styles.type}>E-mail</p>
          <a
            className={styles.info}
            href='mailto:info@avto-moto.ru'
          >
            info@avto-moto.ru
          </a>
        </li>
      </ul>

      <div className={styles.map}>
        <a
          className={styles.city}
          href='https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps'
        >
          Санкт‑Петербург
        </a>
        <a
          className={styles.location}
          href='https://yandex.ru/maps/2/saint-petersburg/house/naberezhnaya_reki_karpovki_5/Z0kYdQZmS0IFQFtjfXV3eX1gYw==/?ll=30.316272%2C59.968137&utm_medium=mapframe&utm_source=maps&z=17.09'
        >
          Набережная реки Карповки, 5 — Яндекс.Карты
        </a>
        <iframe
          title='map'
          src='https://yandex.ru/map-widget/v1/-/CCUqjJwiSC'
          frameBorder='1'
          allowFullScreen={true}
        />
      </div>
    </section>
  );
}
