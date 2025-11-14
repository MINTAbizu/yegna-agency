import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Productlist from './component/product/Productlist';
import HorizontalScrollProducts from './component/HorizontalScrollProducts/HorizontalScrollProducts';
import Handmadeproduct from './component/Handmadeproduct/Handmadeproduct';
import UserExample from './component/User/UserExample';
import RewardsList from './component/Rewardcard/RewardsList'
import BrowseAllProducts from './component/BrowseAllProducts/BrowseAllProducts';
import Footer from './component/footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PromotionCarousel from './component/PromotionCarousel/PromotionCarousel';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      
      <HorizontalScrollProducts/>
      <Productlist/>
      <Handmadeproduct/>
      <UserExample/>

      <RewardsList/>
      <BrowseAllProducts/>
      <PromotionCarousel/>
      <Footer/>
    </div>
  )
}

export default App
