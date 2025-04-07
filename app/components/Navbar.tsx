'use client';

import LinkButton from "./LinkButton";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><LinkButton href="/" title="Principal"/></li>
        <li><LinkButton href="/second" title="Segunda"/></li>
        <li><LinkButton href="/third" title="Tercera"/></li>
      </ul>
    </nav>
  );
};

export default Navbar;
