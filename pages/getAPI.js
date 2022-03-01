import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { useState } from "react/cjs/react.production.min";


const buyapi = () => {
  return (
    <div>
      <Head>
        <title>Get API</title>
      </Head>
      <Script
        id="my-id10"
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
      ></Script>
      
      <iframe src="/api/blogs" className="w-[50rem] h-[30rem] mx-auto border-lime-600 border-4 "></iframe>
    </div>
  );
};

export default buyapi;
