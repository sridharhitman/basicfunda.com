import Head from "next/head";
import Script from "next/script";
import React from "react";
const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Script id="my-id7" strategy="beforeInteractive" src="https://cdn.tailwindcss.com"> </Script>
    </div>
  );
};

export default About;
