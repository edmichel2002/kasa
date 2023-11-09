import React, { useState } from "react";
import arrowLeft from "../../Assets/images/arrow_back_ios-24px 1.png";
import arrowRight from "../../Assets/images/arrow_forward_ios-24px 1.png";
import '../Slideshow/Slideshow.css';

function Slideshow({ imagesList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = imagesList[currentIndex];

  const slide = (direction) => {
    const newIndex =
      direction === "left"
        ? currentIndex === 0
          ? imagesList.length - 1
          : currentIndex - 1
        : currentIndex === imagesList.length - 1
        ? 0
        : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <div className="descriptionAccommodation">
      <img src={currentImage} alt="Accommodation" className="AccommodationImage" />
      {imagesList.length > 1 && (
        <div className="Number">
          <img className="Arrow-Left" onClick={() => slide("left")} src={arrowLeft} alt="Backward" />
          <p>
            {currentIndex + 1}/{imagesList.length}
          </p>
          <img className="Arrow-Right" onClick={() => slide("right")} src={arrowRight} alt="Forward" />
        </div>
      )}
    </div>
  );
}

export default Slideshow;
