import React from "react";
import Head from "next/head";
import Script from "next/script";
import BlogRec from "../components/BlogRec";
import styles from "../styles/blogcontainer.module.css";
const Blogs = () => {
  return (
    <div>
      <Head>
        <title>My Blogs</title>
      </Head>
      <Script
        id="my-id1"
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
      >
        {" "}
      </Script>
     <main className={styles.main}>
     <div className="mx-auto justify-center flex flex-col">
      <BlogRec header="How-to-learn-JavaScript" date="22nd-February-2022" details="JavaScript is a language used to add logic to the websites. Here's how you should learn it"></BlogRec>
        
      </div>
     </main>
    </div>
  );
};

export default Blogs;
