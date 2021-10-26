import React from 'react';
import PropTypes from 'prop-types';
import styles from './slider-ctrl.module.scss';

export default function SliderCtrl({isLeft = false, onBtnClick, slideIndex, slidesLength}) {
  return(
    <button
      type='button'
      className={`${styles.arrow} ${isLeft && styles.left}`}
      onClick={onBtnClick}
      aria-label={isLeft ? 'Слайд слева' : 'Слайд справа'}
      disabled={isLeft
        ? slideIndex === 0 && true
        : slideIndex === slidesLength - 1 && true}
    />
  );
}

SliderCtrl.propTypes = {
  isLeft: PropTypes.bool,
  onBtnClick: PropTypes.func.isRequired,
  slideIndex: PropTypes.number.isRequired,
  slidesLength: PropTypes.number.isRequired,
};
