import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Helmet } from 'react-helmet';
import styles from '../css/Customer.module.css';

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/Customer">
        <p className='titelbutton'>SmaakCinema</p>
          </Link>
        <div className={styles.buttonsrow}>
          {/* Use Link to create a navigation link */}
          <Link to="/Customerrecipes">
            <button>Recepten</button>
          </Link>
          <Link to="/Customerabout">
          <button>Over Ons</button>
          </Link>
          <Link to="/Customer">
          <button>Contact</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
