import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import styles from '../styles/Main.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
