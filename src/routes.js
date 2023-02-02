import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Rating from './components/Rating/Rating.js';
import ThankYou from './components/ThankYou/ThankYou.js';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Rating />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </Routes>
  );
}

export default MainRoutes;
