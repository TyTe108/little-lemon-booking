import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";
import styles from './Nav.module.css'; // Import the CSS module

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <img src={littlelemon_logo} alt="Little Lemon Logo" className={styles.logo}></img>
      <ul className={styles.navList}>
        <li className={styles.navItem}><button className={styles.navButton}>Home</button></li>
        <li className={styles.navItem}><button className={styles.navButton}>About</button></li>
        <li className={styles.navItem}><button className={styles.navButton}>Menu</button></li>
        <li className={styles.navItem}><button className={styles.navButton}>Reservations</button></li>
        <li className={styles.navItem}><button className={styles.navButton}>Order Online</button></li>
        <li className={styles.navItem}><button className={styles.navButton}>Login</button></li>
      </ul>
    </nav>
  );
};

export default Nav;
