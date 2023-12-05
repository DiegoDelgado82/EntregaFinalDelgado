import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart, ItemDetailContainer, ItemListContainer, NavBar, Products } from "./components";

function App() {
  return (
    <>
    
    
    
    
      <BrowserRouter>
      <Products/>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
