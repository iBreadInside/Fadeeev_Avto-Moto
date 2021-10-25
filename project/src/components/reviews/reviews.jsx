import React, { useState } from 'react';
import Modal from '../modal/modal';
import ReviewItem from '../review-item/review-item';
import styles from './reviews.module.scss';

const REVIEWS = [
  {
    name: 'Борис Иванов',
    positive: 'Мощность, внешний вид',
    negative: 'Слабые тормозные колодки (пришлось заменить)',
    comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
    rating: 3,
  },
  {
    name: 'Марсель Исмагилов',
    positive: 'Cтиль, комфорт, управляемость',
    negative: 'Дорогие ремонт и обслуживание',
    comment: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
    rating: 3,
  }
];

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  const [isModalShown, setIsModalShown] = useState(false);

  const handleBtnClick = () => {
    setIsModalShown(true);
  };

  return(
    <>
      <section className={styles.reviews}>
        <button
          type='button'
          className={styles.write}
          onClick={handleBtnClick}
        >
          Оставить отзыв
        </button>

        <ul className={styles.list}>
          {reviewsList.map((review) => (
            <ReviewItem item={review} />
          ))}
        </ul>
      </section>

      {isModalShown && <Modal />}
    </>
  );
}
