import React from 'react';
import detailsProp from './details.prop';
import styles from './details.module.scss';

export default function Details({detailsList}) {
  const DETAILS_NAMES = [
    'Трансмиссия',
    'Мощность двигателя, л.с.',
    'Тип двигателя',
    'Привод',
    'Объем двигателя, л',
    'Макс. крутящий момент',
    'Количество цилиндров',
  ];

  return(
    <ul className={styles.details}>
      {Object.values(detailsList).map((item, index) => (
        <li
          key={item}
          className={styles.item}
        >
          <p className={`${styles.text} ${styles.name}`}>{DETAILS_NAMES[index]}</p>
          <p className={`${styles.text} ${styles.value}`}>{item}</p>
        </li>
      ))}
    </ul>
  );
}

Details.propTypes = {
  detailsList: detailsProp,
};
