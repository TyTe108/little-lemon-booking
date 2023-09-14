import React from "react";
import small_logo from "../images/small_logo.png";
import styles from './Footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footerSection}>
        <div>
          <img src={small_logo} alt="Small Logo" className={styles.footerLogo} />
        </div>
        <div>
          <h3 className={styles.footerTitle}>Document Navigation</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>Home</li>
            <li className={styles.footerItem}>About</li>
            <li className={styles.footerItem}>Menu</li>
            <li className={styles.footerItem}>Reservations</li>
            <li className={styles.footerItem}>Order Online</li>
            <li className={styles.footerItem}>Login</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footerTitle}>Contact</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>Address</li>
            <li className={styles.footerItem}>Phone Number</li>
            <li className={styles.footerItem}>Email</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footerTitle}>Social Media Links</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>Facebook</li>
            <li className={styles.footerItem}>Twitter</li>
            <li className={styles.footerItem}>Instagram</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
