import React from "react";
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import Main from "./routes/Main"
import Cart from "./routes/Сart"
import Market from "./routes/Market";
import Payment from "./routes/Payment";

  

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main />} />
          <Route path="cart" element={<Cart />} />
          <Route path="market" element={<Market/>}/>
          <Route path="payment" element={<Payment/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
