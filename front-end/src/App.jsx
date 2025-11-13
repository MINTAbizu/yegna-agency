import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Productlist from './component/product/Productlist';
import HorizontalScrollProducts from './component/HorizontalScrollProducts/HorizontalScrollProducts';
import Handmadeproduct from './component/Handmadeproduct/Handmadeproduct';
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      
      <HorizontalScrollProducts/>
      <Productlist/>
      <Handmadeproduct/>
    </div>
  )
}

export default App
