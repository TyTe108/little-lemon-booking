// Header.js
import React from "react";
import food1 from "../images/food1.avif";
import { Link } from "react-router-dom";

const Header = ({ setShowBooking }) => {
  const handleReserveClick = () => {
    setShowBooking(true);
  };

  return (
    <header>
      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking"><button aria-label="On Click" onClick={handleReserveClick}>Reserve Table</button></Link>
        </div>
        <div>
          <img src={food1} alt="Delicious Mediterranean Food" />
        </div>
      </section>
    </header>
  );
}

export default Header;
