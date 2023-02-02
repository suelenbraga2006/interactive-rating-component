import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';

import star from '../../assets/images/icon-star.svg';

function Rating() {
  const rating = Array(5).fill(0);
  const navigate = useNavigate();
  const [currentValue, setCurrentValue] = useState(0);

  function handleSubmit() {
    navigate('/thankyou', { state: currentValue });
  }

  function handleClick(value) {
    setCurrentValue(value);
  }

  return (
    <div className="container">
      <div className="star">
        <img src={star} alt="Rating" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating">
        {rating.map((_, i) => {
          return (
            <div
              key={i}
              className={currentValue === i ? 'active' : 'nonActive'}
              onClick={() => handleClick(i)}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default Rating;
