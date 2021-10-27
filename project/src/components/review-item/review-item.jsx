import React from 'react';
import { STARS_IDS } from '../../const';
import styles from './review-item.module.scss';
import reviewItemProp from './review-item.prop';

export default function ReviewItem({item}) {
  const {
    name,
    plus,
    minus,
    comment,
    rating,
  } = item;

  const stars = STARS_IDS.map((ID) => {
    return(
      <li
        key={ID}
        className={`${ID} ${styles.star} ${ID.toString() <= rating ? `${styles.red}` : ''}`}
      ></li>
    );
  });

  return(
    <li className={styles.review}>
      <p className={styles.name}>{name}</p>

      {plus &&
        <div className={styles.short}>
          <p className={`${styles.title} ${styles.plus}`}>Достоинства</p>
          <p className={styles.text}>{plus}</p>
        </div>
      }

      {minus &&
        <div className={styles.short}>
          <p className={`${styles.title} ${styles.minus}`}>Недостатки</p>
          <p className={styles.text}>{minus}</p>
        </div>
      }

      <div className={styles.full}>
        <p className={styles.title}>Комментарий</p>
        <p className={styles.text}>{comment}</p>
      </div>

      {rating &&
        <div className={styles.rating}>
          <ul className={styles.stars}>
            {stars}
          </ul>

          <p className={styles.commend}>Советует</p>
        </div>
      }

      <div className={styles.bottom}>
        <p className={styles.time}>1 минуту назад</p>
        <button type='button' className={styles.respond}>Ответить</button>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  item: reviewItemProp,
};
