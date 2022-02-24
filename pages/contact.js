import React from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Script
        id="my-id5"
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
      ></Script>
      <h1 className="text-center font-extrabold text-3xl text-fuchsia-800">
        Contact Us
      </h1>
      <p className="text-center p-8 mt-48 bg-black font-mono text-white font-bold text-xl">
        You can contact us at:
        <Link href="mailto:basicfunda.dev@gmail.com">
          <a
            target="_blank"
            className="underline decoration-2 text-gray-200 hover:decoration-fuchsia-300 decoration-fuchsia-500 hover:text-white"
          >
            basicfunda.dev@gmail.com
          </a>
        </Link>
        <br />
        OR
        <br />
        <Link href="mailto:hisariasridhar@gmail.com">
          <a
            target="_blank"
            className="underline decoration-2 text-gray-200 hover:decoration-fuchsia-300 decoration-fuchsia-500 hover:text-white"
          >
            hisariasridhar@gmail.com
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Contact;
