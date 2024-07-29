import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import DeletePizza from "./pages/DeleteView";
//import { CartProvider } from "./components/CartContext";
import { Provider } from "react-redux";
import store from "./store";
import { useDispatch } from "react-redux";
import { fetchPizzas } from "./store/Data-thunks";

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas("/pizzaData"));
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delete" element={<DeletePizza />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
