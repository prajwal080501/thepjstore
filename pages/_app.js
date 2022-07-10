import Footer from "../components/Footer";
import Header from "../components/Header";
import { LazyMotion, domAnimation, m } from "framer-motion"
import "../styles/globals.css";
import {useState} from "react";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        <Header handleOpen={handleOpen} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </LazyMotion>
    </>
  );
}

export default MyApp;
