// Header.js
import React from "react";
import food1 from "../images/food1.png";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Import the CSS module

const Header = ({ setShowBooking }) => {
  const handleReserveClick = () => {
    setShowBooking(true);
  };

  return (
    <header className={styles.header}>
      <section className={styles.headerContent}>
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a cherished Mediterranean eatery, dedicated to blending time-honored recipes with contemporary innovation.</p>
          <Link to="/booking">
            <button aria-label="On Click" onClick={handleReserveClick}>
              Reserve Table
            </button>
          </Link>
        </div>
        <div>
          <img src={food1} alt="Delicious Mediterranean Food" className={styles.foodImage} />
        </div>
      </section>
    </header>
  );
}

export default Header;
