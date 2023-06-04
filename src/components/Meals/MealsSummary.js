import React from 'react';
import classes from './MealsSumary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with hight-quality ingredients, just-in-time and of course by experience chefs!</p>
    </section>
  )
}

export default MealsSummary