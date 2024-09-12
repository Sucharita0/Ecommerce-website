import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  Navbar  from './component/Navbar/Navbar';
import  Shop  from './component/Pages/Shop';
import  ShopCategory  from './component/Pages/ShopCategory';
import  Product  from './component/Pages/Product';
import  Cart  from './component/Pages/Cart';

import banner_mens from './component/Assets/banner_mens.png';
import banner_women from './component/Assets/banner_women.png';
import banner_kids from './component/Assets/banner_kids.png';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={banner_mens} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory banner={banner_women} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid" />}/>
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
     
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
