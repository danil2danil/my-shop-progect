import React from "react";
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import Main from "./routes/Main"
import Cart from "./routes/Сart"
  

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
