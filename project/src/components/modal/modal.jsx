import React, { Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { LocalStorageKey, STARS_IDS } from '../../const';
import styles from './modal.module.scss';

const CLOSE_KEYBORD_BTN = 'Escape';

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

  const [isName, setIsName] = useState(true);
  const [isComment, setIsComment] = useState(true);

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
      if (evt.key === CLOSE_KEYBORD_BTN) {
        onClose();
      }
    }
    document.addEventListener('keydown', closeOnEsc);

    return () => {
      document.removeEventListener('keydown',closeOnEsc);
    };
  }, [onClose]);

  useEffect(() => {
    const closeOnClick = (evt) => {
      if (evt.target === modalRef.current) {
        onClose();
      }
    };

    document.addEventListener('mousedown', closeOnClick);

    return () => {
      document.removeEventListener('mousedown',closeOnClick);
    };
  }, [onClose]);

  const handleNameChange = (evt) => {
    localStorage.setItem(LocalStorageKey.NAME, evt.target.value);
    setFields(prevState => ({...prevState, name: evt.target.value}));
    setIsName(true);
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
    setIsComment(true);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (name === '') {
      setIsName(false);
    }

    if (comment === '') {
      setIsComment(false);
    }

    if (name.length > 0 && comment !== '') {
      onFormSubmit(evt, fields);
      console.log(name, comment);
    }
  };

  const inputs = STARS_IDS.map((ID) => {
    return (
      <Fragment key={ID}>
        <input
          className={styles.rating__input}
          id={`star-${ID}`}
          type='radio'
          name='rating'
          value={ID}
          onChange={handleRatingChange}
          checked={ID.toString() === rating}
        />
        <label
          className={`${styles.rating__label} ${ID <= rating ? styles.rating__red : ''}`}
          htmlFor={`star-${ID}`}
          aria-label={`Оценка ${ID}`}
        />
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
          onSubmit={onSubmit}
        >
          <div className={styles.block}>
            <label htmlFor='name' className={styles.required} >*</label>
            {!isName &&
              <p className={styles.error}>Пожалуйста, заполните поле</p>
            }
            <input
                className={styles.text}
                type='text'
                name='name'
                id='name'
                placeholder='Имя'
                onChange={handleNameChange}
                value={name}
                autoFocus />

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
            {!isComment &&
              <p className={`${styles.error} ${styles.error__textarea}`}>Пожалуйста, заполните поле</p>
            }
            <textarea
                className={styles.textarea}
                type='text'
                name='comment'
                id='review-comment'
                placeholder='Комментарий'
                onChange={handleCommentChange}
                value={comment} />
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
};
