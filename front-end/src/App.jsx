import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from './component/Header/Header';
import Footer from './component/footer/Footer';
import Home from './component/Home/Home';
import Productlist from './component/product/Productlist';
import HorizontalScrollProducts from './component/HorizontalScrollProducts/HorizontalScrollProducts';
import Handmadeproduct from './component/Handmadeproduct/Handmadeproduct';
import UserExample from './component/User/UserExample';
import RewardsList from './component/Rewardcard/RewardsList';
import BrowseAllProducts from './component/BrowseAllProducts/BrowseAllProducts';
import PromotionCarousel from './component/PromotionCarousel/PromotionCarousel';
import Register from './pages/Register';
import Login from './pages/Login';
import KycDashboardWithHeader from './kyc/KycDashboardWithHeader';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Home/>
            <HorizontalScrollProducts/>
            <Productlist/>
            <Handmadeproduct/>
            <UserExample/>
            <RewardsList/>
            <BrowseAllProducts/>
            <PromotionCarousel/>
          </>
        } />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/products" element={<Productlist />} />
        <Route path="/handmade" element={<Handmadeproduct />} />
        <Route path="/rewards" element={<RewardsList />} />
        <Route path="/browse" element={<BrowseAllProducts />} />
        <Route path="/promotion" element={<PromotionCarousel />} />
        <Route path="/KycDashboardWithHeader" element={<KycDashboardWithHeader />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
