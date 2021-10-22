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
    standart: firstSlide,
    retina: firstSlideRetina,
  },
  {
    standart: secondSlide,
    retina: secondSlideRetina,
  },
  {
    standart: thirdSlide,
    retina: thirdSlideRetina,
  }
];

const Previews = [
  {
    standart: firstSlidePreview,
    retina: firstSlidePreviewRetina,
  },
  {
    standart: secondSlidePreview,
    retina: secondSlidePreviewRetina,
  },
  {
    standart: thirdSlidePreview,
    retina: thirdSlidePreviewRetina,
  }
];

const renderPreviews = () => {
  return(
    Previews.map(
      ({standart, retina}, index) => (
        <li
          key={index}
          className='preview'
        >
          <img
            src={standart}
            srcSet={retina}
            alt={`Превью ${index}`}
            width='128'
            height='80'
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
      <div className={styles.bigSlide}>
        {Slides.map(
          ({standart, retina}, index) => {
            return(
              <>
                <span class={styles.new}>new model</span>
                {
                  index === currentSlide && (
                    <img
                      key={index}
                      src={standart}
                      srcSet={`${retina} 2x`}
                      alt='Фото автомобиля Марпех 11'
                      width='600'
                      height='375'
                    />
                  )
                }
              </>
            );
          }
        )}
      </div>

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
