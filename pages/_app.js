import Footer from "../components/Footer";
import Header from "../components/Header";
import { LazyMotion, domAnimation, m } from "framer-motion";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }

    setSubTotal(subt)
  };

  const addToCart = (itemCode, qty, price, name, size, color, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant, color }
    }
    setCart(newCart)
    saveCart(newCart)
  };

  const removeFromCart = (itemCode, qty, price, name, size, color, variant) => {
    const newCart = JSON.parse(JSON.stringify(cart));

    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty === 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };
  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          <Header
            handleOpen={handleOpen}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            handleMenuOpen={handleMenuOpen}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            setSubTotal={setSubTotal}
            subTotal={subTotal}
          />
          <Component
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            setSubTotal={setSubTotal}
            subTotal={subTotal}
            handleOpen={handleOpen}
            {...pageProps}
          />
          <Footer />
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default MyApp;