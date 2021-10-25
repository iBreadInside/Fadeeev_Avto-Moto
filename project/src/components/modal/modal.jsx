import React, { Fragment } from 'react';
import { STARS_COUNT } from '../../const';
import styles from './modal.module.scss';

export default function Modal() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleClose = () => {

  };

  const inputs = [...Array(STARS_COUNT)].map((_, index) => {
    const id = STARS_COUNT - index;

    return (
      <Fragment key={id}>
        <input
          id={`star-${id}}`}
          className={styles.rating__input}
          type="radio"
          name="rating"
          value={id}
          // onChange={handleRatingChange}
          // disabled={isSending}
        />
        <label
          className={styles.rating__label}
          htmlFor={`star-${id}}`}
        >Rating {index}
        </label>
      </Fragment>
    );
  });

  return(
    <section className={styles.modal}>
      <div className={styles.container}>
        <h2 className={styles.title}>Оставить отзыв</h2>

        <button
          type='button'
          className={styles.close}
        />

        <form
          className={styles.form}
          id='review-form'
          onSubmit={handleSubmit}
        >
          <div className={styles.block}>
            <input
                className={styles.text}
                type='text'
                name='review'
                id='review-name'
                placeholder='Имя'
                required />

            <input
                className={styles.text}
                type='text'
                name='review'
                id='review-positive'
                placeholder='Достоинства'/>

            <input
                className={styles.text}
                type='text'
                name='review'
                id='review-negative'
                placeholder='Недостатки'/>
          </div>

          <div className={styles.block}>
            <div className={styles.rate}>
              <p className={styles.label}>Оцените товар:</p>
                <div className={styles.rating__stars}>
                  {inputs}
                </div>
            </div>

            <textarea
                className={styles.textarea}
                type='text'
                name='review'
                id='review-comment'
                placeholder='Комментарий'
                required />
          </div>
        </form>
        <button
            type='submit'
            form='review-form'
            className={styles.send}
          >
            Оставить отзыв
          </button>
      </div>
    </section>
  );

}
