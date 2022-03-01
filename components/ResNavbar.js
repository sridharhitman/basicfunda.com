import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import navStyles from "../styles/navbar.module.css";

const ResNavbar = () => {
  function showNav() {
    var x = document.getElementById("navigation");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }
  return (
    <>
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <Script
          id="my-id6"
          strategy="beforeInteractive"
          src="https://cdn.tailwindcss.com"
        ></Script>
        <nav id={navStyles.topnav} className={`${navStyles.navigation} ${navStyles.topnav}`}>
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
            <Link href="javascript:void(0);">
              <a className="icon" onClick={showNav}>
                <i className="fa fa-bars"></i>
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ResNavbar;
