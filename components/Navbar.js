import React from "react";
import mystyles from "../styles/cus.module.css";
import Script from "next/script";
import Link from "next/link";
function Navbar() {
  return (
    <div>
      
      <Script
        id="my-id6"
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
      >
        {" "}
      </Script>
      <nav className={mystyles.navigation}>
        <ul className="ul">
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
          <Link href="/getAPI">
            <a>
              <li>API</li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
