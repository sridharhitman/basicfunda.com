import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  // const router = useRouter();

  return (
    <div className="font-mono">
      <Head>
        <title>{blog && blog.title}</title>
      </Head>
      <Script
        id="my-id4"
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
      ></Script>
      <h1 className="text-slate-700 text-center text-3xl font-bold">
        Today&apos;s Topic:
        <p className="text-violet-700 text-5xl mt-7">{blog && blog.title}</p>
      </h1>
      <p className=" w-[80rem] flex justify-center mx-auto bg-blue-100 text-gray-700 text-center font-semibold p-4 mt-8">
        Published on {blog && blog.date} and written by {blog && blog.author}
      </p>
      <hr className="mt-10" />
      <hr />
      <p className="bg-violet-100 text-black font-semibold text-center w-[80rem] flex justify-center mx-auto text-lg mt-16">
        {blog && blog.content}
      </p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}

export default Slug;
