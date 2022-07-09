/** @format */

import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import { Navbar } from "./layout/Header";
import CartPage from "./pages/CartPage";
import CheckoutProcess from "./pages/CheckoutProcess";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Payment from "./pages/Payment";
import Shipping from "./pages/Shipping";
import Showcase from "./pages/Showcase";
import SignIn from "./pages/SignIn";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />

        <Route path="checkout-process" element={<CheckoutProcess />}>
          <Route index element={<CartPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="info" element={<Info />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="payment" element={<Payment />} />
          <Route path="thankyou" element={<ThankYou />} />
        </Route>

        <Route path="showcase" element={<Showcase />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
