import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart, CartWidget, ItemDetailContainer, ItemListContainer, NavBar, Products } from "./components";
import {CartContextProvider} from "./context/CartContext"
import { FirebaseContextProvider } from "./context/FirebaseContext";
function App() {
  return (
    <>
    
    
    <FirebaseContextProvider>
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
      </FirebaseContextProvider>
    </>
  );
}

export default App;
