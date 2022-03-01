import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { useState } from "react/cjs/react.production.min";

const handleClick = (e) =>  {
  localStorage.setItem("API", 'Active')
  
  console.log(e)
}
const buyapi = () => {
  return (
    <div>
      <Head>
        <title>Buy API</title>
      </Head>
      <Script
        id="my-id10"
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
      ></Script>
      <Link href="/api/blogs">
      <button onClick={handleClick} id="buyApi-btn" className="p-4 text-center justify-center mx-auto text-red-200 rounded-lg flex bg-pink-700 hover:text-red-100 hover:bg-pink-900 font-mono text-xl">
          Buy Now
      </button>
      </Link>
    </div>
  );
};

export default buyapi;
