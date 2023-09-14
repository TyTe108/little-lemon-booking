import React, { useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";
import styles from './Main.module.css'; // Import the CSS module

const Main = () => {
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());
    for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
        result.push(i + ':00');
      }
      if(random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  const submitAPI = function(formData) {
    return true;
  };

  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer((state, date) => {
    return {availableTimes: fetchAPI(new Date(date))};
  }, initialState);

  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  const [showBooking, setShowBooking] = useState(false);
  const handleReserveClick = () => {
    setShowBooking(true);
  };

  return (
    <main className={styles.mainContainer}>
    <section className={styles.contentSection}>
      <h2 className={styles.contentTitle}>Welcome to Little Lemon Restaurant</h2>
      <p className={styles.contentText}>
        Experience the finest dining with a variety of cuisines to choose from.
      </p>
    </section>
      <Routes className={styles.routeContent}>
        <Route path="/" element={<Header />} />
        <Route path="/booking" element={
          showBooking ? 
          <div className={styles.routeContent}>
            <Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />
          </div> :
          <div className={styles.centerButton}>
            <button className={styles.reserveButton} onClick={handleReserveClick}>
              Reserve Your Table
            </button>
          </div>
        } />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
