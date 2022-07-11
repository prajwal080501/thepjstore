import Footer from "../components/Footer";
import Header from "../components/Header";
import { LazyMotion, domAnimation, m } from "framer-motion"
import "../styles/globals.css";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          <Header handleOpen={handleOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleMenuOpen={handleMenuOpen} isOpen={isOpen} setIsOpen={setIsOpen} />
          <Component {...pageProps} />
          <Footer />
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default MyApp;
