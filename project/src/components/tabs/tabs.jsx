import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Details from '../details/details';
import styles from './tabs.module.scss';
import detailsProp from '../details/details.prop';

const TabType = {
  DETAILS: 'Характеристики',
  REVIEWS: 'Отзывы',
  CONTACTS: 'Контакты',
};

const getTabByType = (type, car) => {
  switch (type) {
    case TabType.REVIEWS:
      return 2;
    case TabType.CONTACTS:
      return 2;
    default:
      return <Details detailsList={car.details} />;
  }
};

export default function Tabs({car}) {
  const [activeTab, setActiveTab] = useState(TabType.DETAILS);

  const tabList = Object.values(TabType).map(
    (value) => (
      <li
        className='tab__item'
        key={value}
      >
        <button
          type='button'
          className={`${styles.tab__btn} ${value === activeTab ? styles.tab__active : ''}`}
          onClick={() => {
            setActiveTab(value);
          }}
        >
          {value}
        </button>
      </li>
    )
  );

  const setDefaultTab = () => {
    setActiveTab(TabType.DETAILS);
  };

  useEffect(setDefaultTab, []);

  return(
    <section className='tabs'>
      <nav className={styles.tabs__nav}>
        <ul className={styles.tab__list}>
          {tabList}
        </ul>
      </nav>

      {getTabByType(activeTab, car)}
    </section>
  );
}

Tabs.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: detailsProp,
    fullPrice: PropTypes.string.isRequired,
    currentPrice: PropTypes.string.isRequired,
    credit: PropTypes.string.isRequired,
  })
};
