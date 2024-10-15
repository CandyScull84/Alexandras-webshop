// App.js
import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage'; 
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OrderSummary from './pages/OrderSummary'; 
import Sidebar from './components/Sidebar/Sidebar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';


const App = () => {
  const [cart, setCart] = useState([]); // Kundvagnens innehåll
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar-status

  // Lägg till en produkt i kundvagnen
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      // Kontrollera om produkten redan finns i kundvagnen
      const existingProductIndex = prevCart.findIndex((item) => item.product.id === product.id);

      if (existingProductIndex !== -1) {
        // Om produkten finns, uppdatera kvantiteten
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity; // Öka kvantiteten
        return updatedCart; // Returera den uppdaterade kundvagnen
      }

      // Om produkten inte finns, lägg till den nya produkten
      return [...prevCart, { product, quantity }];
    });
  };

  // Ta bort en produkt från kundvagnen
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Funktion för att uppdatera kvantiteten av ett objekt i varukorgen
  const updateCartItemQuantity = (index, newQuantity) => {
    if (newQuantity > 0) {
      const newCart = [...cart];
      newCart[index].quantity = newQuantity;
      setCart(newCart);
    } else {
      // Om kvantiteten är 0, ta bort objektet
      removeFromCart(index);
    }
  };
  // Beräkna det totala antalet produkter i kundvagnen
  const getTotalItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

   // Växla sidopanelens öppning och stängning
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Hantera orderinlämning
  const handleSubmitOrder = (personalDetails) => {
    console.log('Order submitted with details:', personalDetails);
    setCart([]); // Töm kundvagnen efter beställning
  };

  return (
    // Router-komponenten från 'react-router-dom' används för att hantera olika sidor i applikationen
    <Router>
      {/* ScrollToTop gör att sidan alltid starta högst upp när en ny rutt laddas */}
      <ScrollToTop />
      <Header />
      <Navbar toggleSidebar={toggleSidebar} cartItemCount={getTotalItemCount()} />
       {/* Sidebar representerar en sidomeny */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> 

       {/* Main content är innehållet som ändras beroende på vilken sida man navigerar till */}
      <div className="main-content">
         {/* Routes-komponenten definierar de olika sidorna och deras URL-vägar */}
        <Routes>
          {/* HomePage laddas här. "/" betyder roten av webbplatsen. */}
          <Route path="/" element={<HomePage />} /> 
         
          {/* ProductPage listar alla produkter */}
          <Route path="/product" element={<ProductPage />} />

          {/* ProductDetailPage visar dynamiskt med ett produkt-ID i URL:en. addToCart lägger produkt i korgen */}
          <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} /> 

           {/* CartPage visar innehållet i kundvagnen. Funktionen för att uppdatera kvantiteten och ta bort produkter finns här */}
          <Route path="/cart" element={<CartPage cart={cart} updateCartItemQuantity={updateCartItemQuantity} removeFromCart={removeFromCart} />} />

          {/* AboutPage visar information om företaget eller webbplatsen */}
          <Route path="/about" element={<AboutPage />} />
           {/* ContactPage visar kontaktinformation */}
          <Route path="/contact" element={<ContactPage />} />
          {/* Order-summary ses en översikt av beställningen och kan skicka iväg den */}
          <Route 
            path="/order-summary" 
            element={<OrderSummary cartItems={cart} handleSubmitOrder={handleSubmitOrder} />} 
          />
        </Routes>
      </div>
       {/* Footer-komponenten visas längst ner på varje sida med upphovsrättsinformation och länkar */}
      <Footer />
    </Router>
  );
};

export default App;

