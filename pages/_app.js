import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Forevv </title>
        <meta name="description" content="Live your memory lanes!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div id="parentDiv">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
