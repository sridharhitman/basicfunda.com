import React from "react";
import styles from '../../styles/def.module.css';
import mystyles from '../../styles/cus.module.css';
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <nav className={mystyles.navigation}>
        <ul>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/blogs">
            <a>
              <li>Blogs</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li>Contact</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
