import React, { useState } from 'react';
import { LocalStorageKey } from '../../const';
import Modal from '../modal/modal';
import ReviewItem from '../review-item/review-item';
import styles from './reviews.module.scss';

const REVIEWS = [
  {
    name: 'Борис Иванов',
    plus: 'Мощность, внешний вид',
    minus: 'Слабые тормозные колодки (пришлось заменить)',
    comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
    rating: '3',
  },
  {
    name: 'Марсель Исмагилов',
    plus: 'Cтиль, комфорт, управляемость',
    minus: 'Дорогие ремонт и обслуживание',
    comment: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
    rating: '3',
  }
];

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  const [isModalShown, setIsModalShown] = useState(false);

  const handleBtnClick = () => {
    setIsModalShown(true);
  };

  const handleClose = () => {
    setIsModalShown(false);
  };

  const handleSubmit = (evt, newComment) => {
    evt.preventDefault();
    setReviewsList(prevState => ([newComment, ...prevState]));
    setIsModalShown(false);

    Object.values(LocalStorageKey).map((name) => (
      localStorage.removeItem(name)
    ));

    console.log(reviewsList);
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
            <ReviewItem item={review} key={review.name} />
          ))}
        </ul>
      </section>

      {isModalShown && <Modal onClose={handleClose} onFormSubmit={handleSubmit} />}
    </>
  );
}
