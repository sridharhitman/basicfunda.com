import "../styles/globals.css";
import Script from "next/script"
import Navbar from "../components/Navbar";
import NextNprogress from "nextjs-progressbar";
// import ResNavbar from "../components/ResNavbar"
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script
        id="my-id2"
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
      >
      </Script>
    <div>
      <NextNprogress
        color="#000000"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
        options={{
          showSpinner:false,
        }}
      />
      <Navbar/>
      {/* <ResNavbar/> */}
      <Component {...pageProps} />
    </div>
    </>
  );
}

export default MyApp;
