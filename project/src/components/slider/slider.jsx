import React, { useState } from 'react';
import styles from './slider.module.scss';
import firstSlide from '../../img/black-1-big.jpg';
import firstSlideRetina from '../../img/black-1-big@2x.jpg';
import firstSlidePreview from '../../img/black-1-min.jpg';
import firstSlidePreviewRetina from '../../img/black-1-min@2x.jpg';
import secondSlide from '../../img/black-2-big.jpg';
import secondSlideRetina from '../../img/black-2-big@2x.jpg';
import secondSlidePreview from '../../img/black-2-min.jpg';
import secondSlidePreviewRetina from '../../img/black-2-min@2x.jpg';
import thirdSlide from '../../img/black-3-big.jpg';
import thirdSlideRetina from '../../img/black-3-big@2x.jpg';
import thirdSlidePreview from '../../img/black-3-min.jpg';
import thirdSlidePreviewRetina from '../../img/black-3-min@2x.jpg';
import SliderCtrl from '../slider-ctrl/slider-ctrl';

const Slides = [
  {
    id: 0,
    standart: firstSlide,
    retina: firstSlideRetina,
  },
  {
    id: 1,
    standart: secondSlide,
    retina: secondSlideRetina,
  },
  {
    id: 2,
    standart: thirdSlide,
    retina: thirdSlideRetina,
  }
];

const Previews = [
  {
    id: 0,
    standart: firstSlidePreview,
    retina: firstSlidePreviewRetina,
  },
  {
    id: 1,
    standart: secondSlidePreview,
    retina: secondSlidePreviewRetina,
  },
  {
    id: 2,
    standart: thirdSlidePreview,
    retina: thirdSlidePreviewRetina,
  }
];

const renderPreviews = () => {
  return(
    Previews.map(
      ({id, standart, retina}) => (
        <li
          key={id}
          className={styles.preview}
        >
          <img
            src={standart}
            srcSet={retina}
            alt={`Превью ${id + 1}`}
          />
        </li>
      )
    )
  );
};

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesLength = Slides.length;

  const handleLeftClick = (evt) => {
    evt.preventDefault();
    setCurrentSlide(currentSlide - 1);
  };

  const handleRightClick = (evt) => {
    evt.preventDefault();
    setCurrentSlide(currentSlide + 1);
  };

  return(
    <section className={styles.slider}>
      {Slides.map(
        ({id, standart, retina}) => {
          return(
            id === currentSlide && (
              <div
                key={id}
                className={styles.bigSlide}
              >
                <span className={styles.new}>new model</span>

                <img
                  src={standart}
                  srcSet={`${retina} 2x`}
                  alt='Фото автомобиля Марпех 11'
                />
              </div>
            )
          );
        }
      )}

      <div className={styles.control}>
        <SliderCtrl
          isLeft
          slideIndex={currentSlide}
          slidesLength={slidesLength}
          onBtnClick={handleLeftClick} />

        <ul className={styles.previews}>
          {renderPreviews()}
        </ul>

        <SliderCtrl
          slideIndex={currentSlide}
          slidesLength={slidesLength}
          onBtnClick={handleRightClick} />
      </div>
    </section>
  );
}
