import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart, CartWidget, ItemDetailContainer, ItemListContainer, NavBar, Products } from "./components";
import {CartContextProvider} from "./context/CartContext"
function App() {
  return (
    <>
    
    
    
    <CartContextProvider>
      <BrowserRouter>
     
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer /> }  />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      
      </CartContextProvider>
    </>
  );
}

export default App;
