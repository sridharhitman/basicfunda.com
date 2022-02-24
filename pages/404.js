import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Page Not Found-404</title>
      </Head>
      <Script id="My-idis" strategy="beforeInteractive" src="https://cdn.tailwindcss.com"> </Script>
      <div className="bg-red-500 text-white font-serif text-center my-20 text-3xl">
        404 - Page Not Found
        <p className="bg-red-700">
          Go to{" "}
          <Link href="/">
            <a className="decoration-indigo-600 underline decoration-3 font-black text-gray-200 font-mono">
              Home
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
