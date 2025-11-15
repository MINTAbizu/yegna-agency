import React from 'react'
import Productlist from './product/Productlist'
import HorizontalProductList from './HorizontalScrollProducts/HorizontalScrollProducts'
import Handmadeproduct from './Handmadeproduct/Handmadeproduct'
import UserExample from './User/UserExample'
import RewardsList from './Rewardcard/RewardsList'
import PromotionCarousel from './PromotionCarousel/PromotionCarousel'
import Home from './Home/Home'
import Header from './Header/Header'
import Footer from './footer/Footer'
import ProAccount from './Shope/userprofilepage/ProAccount'

function Landingpage() {
  return (
    <div>
      <Header />
        <Home/>
                    
                    <HorizontalProductList/>
                    <Productlist/>
                    <Handmadeproduct/>
                    <UserExample/>
                    <RewardsList/>
                    
                    <PromotionCarousel/>
                    <ProAccount/>

                     <Footer />
      
    </div>
  )
}

export default Landingpage
