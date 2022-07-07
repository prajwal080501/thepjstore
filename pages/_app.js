import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
