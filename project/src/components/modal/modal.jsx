import React, { Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { LocalStorageKey, STARS_COUNT } from '../../const';
import styles from './modal.module.scss';

export default function Modal({onClose, onFormSubmit}) {
  const [fields, setFields] = useState({
    name: '',
    plus: '',
    minus: '',
    rating: '',
    comment: '',
  });

  let {
    name,
    plus,
    minus,
    rating,
    comment,
  } = fields;

  const modalRef = useRef();

  useEffect(() => {
    document.body.classList.add(styles.hideOverflow);

    return () => {
      document.body.classList.remove(styles.hideOverflow);
    };
  })

  useEffect(() => {
    setFields(
      {
        name: localStorage.getItem(LocalStorageKey.NAME) || '',
        plus: localStorage.getItem(LocalStorageKey.PLUS) || '',
        minus: localStorage.getItem(LocalStorageKey.MINUS) || '',
        rating: localStorage.getItem(LocalStorageKey.RATING) || '',
        comment: localStorage.getItem(LocalStorageKey.COMMENT) || '',
      }
    );
  }, []);

  useEffect(() => {
    const closeOnEsc = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closeOnEsc);

    return () => {
      document.removeEventListener('click',closeOnEsc);
    };
  }, [onClose]);

  useEffect(() => {
    const closeOnClick = (evt) => {
      if (evt.target === modalRef.current) {
        onClose();
      }
    };

    document.addEventListener('click', closeOnClick);

    return () => {
      document.removeEventListener('click',closeOnClick);
    };
  }, [onClose]);

  const handleNameChange = (evt) => {
    localStorage.setItem(LocalStorageKey.NAME, evt.target.value);
    setFields(prevState => ({...prevState, name: evt.target.value}));
  };
  const handlePlusChange = (evt) => {
    localStorage.setItem(LocalStorageKey.PLUS, evt.target.value);
    setFields(prevState => ({...prevState, plus: evt.target.value}));
  };
  const handleMinusChange = (evt) => {
    localStorage.setItem(LocalStorageKey.MINUS, evt.target.value);
    setFields(prevState => ({...prevState, minus: evt.target.value}));
  };
  const handleRatingChange = (evt) => {
    localStorage.setItem(LocalStorageKey.RATING, evt.target.value);
    setFields(prevState => ({...prevState, rating: evt.target.value}));
  };
  const handleCommentChange = (evt) => {
    localStorage.setItem(LocalStorageKey.COMMENT, evt.target.value);
    setFields(prevState => ({...prevState, comment: evt.target.value}));
  };

  const inputs = [...Array(STARS_COUNT)].map((_, index) => {
    const id = STARS_COUNT - index;

    return (
      <Fragment key={id}>
        <input
          id={`star-${id}`}
          className={styles.rating__input}
          type='radio'
          name='rating'
          value={id}
          onChange={handleRatingChange}
          checked={id.toString() === rating}
        />
        <label
          className={styles.rating__label}
          htmlFor={`star-${id}`}
        >Rating {index}
        </label>
      </Fragment>
    );
  });

  return(
    <section
      className={styles.modal}
      ref={modalRef}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Оставить отзыв</h2>

        <button
          type='button'
          className={styles.close}
          onClick={onClose}
        />

        <form
          className={styles.form}
          id='review-form'
          onSubmit={(evt) => onFormSubmit(evt, fields)}
        >
          <div className={styles.block}>
            <label htmlFor='name' className={styles.required} >*</label>
            <input
                className={styles.text}
                type='text'
                name='name'
                id='name'
                placeholder='Имя'
                onChange={handleNameChange}
                value={name}
                required />

            <input
                className={styles.text}
                type='text'
                name='plus'
                id='review-positive'
                placeholder='Достоинства'
                value={plus}
                onChange={handlePlusChange} />

            <input
                className={styles.text}
                type='text'
                name='minus'
                id='review-negative'
                placeholder='Недостатки'
                value={minus}
                onChange={handleMinusChange} />
          </div>

          <div className={styles.block}>
            <div className={styles.rate}>
              <p className={styles.label}>Оцените товар:</p>
                <div className={styles.rating__stars}>
                  {inputs}
                </div>
            </div>

            <label
              htmlFor='comment'
              className={`${styles.required} ${styles.required__textarea}`}
            >*</label>
            <textarea
                className={styles.textarea}
                type='text'
                name='comment'
                id='review-comment'
                placeholder='Комментарий'
                onChange={handleCommentChange}
                value={comment}
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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
}
