import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";

const socialmedia = () => {
  return (
    <div>
      <Script
        id="my-id34"
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
      ></Script>
      <Head>
        <title>Social Media Links</title>
      </Head>
      <h1 className="text-xl text-purple-600 text-center p-3 w-96 mx-auto bg-red-200">
        Social Media Links
      </h1>
      <div className="flex flex-row text-center">
        <Link href="https://www.youtube.com/channel/UCTjo7CaWDD5ld-XeGjs8Mzg">
          <a target="_blank">
          <h6 className="flex text-xl text-green-500 underline decoration-yellow-500 mx-auto justify-center hover:decoration-yellow-700 hover:text-green-700">
            Youtube
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 30 30"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-youtube mx-1"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </h6>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default socialmedia;
