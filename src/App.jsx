import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartWidget, ItemListContainer, NavBar, Cart } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<CartWidget />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
