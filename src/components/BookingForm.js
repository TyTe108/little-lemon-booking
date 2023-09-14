import React, { useState } from "react";
import styles from './BookingForm.module.css'; // Import the CSS module

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <form onSubmit={handleSumbit} className={styles.form}>
          <fieldset className={styles.fieldset}>
            <div className={styles.div}>
              <label htmlFor="book-date" className={styles.label}>Choose Date</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required className={styles.input}/>
            </div>
            <div className={styles.div}>
              <label htmlFor="book-time" className={styles.label}>Choose Time</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required className={styles.input}>
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div className={styles.div}>
              <label htmlFor="book-guests" className={styles.label}>Number of Guests</label>
              <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required className={styles.input}></input>
            </div>
            <div className={styles.div}>
              <label htmlFor="book-occasion" className={styles.label}>Occasion</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required className={styles.input}>
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className={styles.div}>
              <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"} className={styles.inputSubmit}></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
