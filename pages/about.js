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
      <h1 className="text-center text-fuchsia-600 m-10 text-lg w-96 bg-red-100 mx-auto">About Us</h1>
     <p className="text-center text-lime-600 m-10 text-lg w-[70rem] bg-lime-100 mx-auto">Hi, Welcome to Basic Funda Developer website. This is a website created by Sridhar Hisaria who uploads blogs. The &apos;Home&apos; tab is the home of the website. I know it doesnt have much content. You can see all blogs in &apos;Blogs&apos; Tab. You can contact by &apos;contact&apos; tab. You can see the social media links in &apos;Social Media&apos; Tab. You can get our API by &apos;API&apos; Tab</p>
    </div>
  );
};

export default About;
