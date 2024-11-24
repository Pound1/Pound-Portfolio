import React from 'react';
import styles from './NavBarStyles.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className={styles.navbar}>
        <Link to={'Pound-Portfolio/'}>Home</Link>
        <Link to={'Pound-Portfolio/pages/ProjectDetails'}>Projects</Link>
        <Link to={'Pound-Portfolio/pages/Gallery'}>Gallery</Link>
      </div>
    </>
  );
}

export default NavBar;
