import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/layouts.css";
import "../styles/elegant-icons.css";
import "../styles/font-awesome.min.css";
import "../styles/magnific-popup.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
