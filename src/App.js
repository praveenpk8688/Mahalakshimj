import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

import MainNavbar from './Components/Navbar/MainNavbar';
import MainSlider from './Components/Sliders/MainSlider';
import ProductCard from './Components/MainCards/ProductCard';

function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <main className="main-content">
        <MainSlider/>
        <div className="container mt-5 pt-3">
          <div className="text-center mb-5">
            <h2 className="elegant-font" style={{ fontSize: '2.5rem' }}>Our Masterpieces</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Discover our exclusive collection of meticulously crafted jewellery, designed to reflect true elegance and sophistication.
            </p>
          </div>
          <ProductCard/>
        </div>
      </main>
    </div>
  );
}

export default App;
