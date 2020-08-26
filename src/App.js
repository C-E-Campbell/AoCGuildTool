import React from 'react';
import styles from './App.module.css';
import Hero from './Components/Hero.jsx';
export default function App() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
