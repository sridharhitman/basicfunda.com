import React, { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import BlogRec from "../components/BlogRec";
import styles from "../styles/blogcontainer.module.css";
import Link from "next/link";

const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);
  return (
    <div>
      {Blogs.map((BlogItem) => {
        return <div key={BlogItem.title}>
          <div className="mx-auto items-center text-center flex flex-col">
         <Link href={`/blogs/${BlogItem.slug}`}>
        <div className="m-3 cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 p-6 text-gray-200 hover:text-white w-[43rem]">
          <h3 className="text-3xl underline decoration-gray-300">
            {BlogItem.title}
          </h3>
          <p className="truncate text-ellipse">{BlogItem.content}</p>
          <h6 className="text-right mt-7 text-sm text-gray-200 hover:text-white">
            {BlogItem.date}
          </h6>
          <h6 className="text-right mt-7 text-sm text-gray-200 hover:text-white">
            Written By {BlogItem.author}
          </h6>
        </div>
      </Link>
      </div>;
        </div>
      })}
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
        
      </main>
    </div>
  );
};

export default Blogs;
