import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.scss';

import thanks from '../../assets/images/illustration-thank-you.svg';

function ThankYou(props) {
  const location = useLocation();

  return (
    <div className="container" id="thankyou">
      <img src={thanks} alt="Thank You!" />
      <span>You selected {location.state + 1} out of 5</span>
      <h1>Thank You!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
