import React from 'react'
import Productlist from './product/Productlist'
import HorizontalProductList from './HorizontalScrollProducts/HorizontalScrollProducts'
import Handmadeproduct from './Handmadeproduct/Handmadeproduct'
import UserExample from './User/UserExample'
import RewardsList from './Rewardcard/RewardsList'
import PromotionCarousel from './PromotionCarousel/PromotionCarousel'
import Home from './Home/Home'

function Landingpage() {
  return (
    <div>
        <Home/>
                    
                    <HorizontalProductList/>
                    <Productlist/>
                    <Handmadeproduct/>
                    <UserExample/>
                    <RewardsList/>
                    
                    <PromotionCarousel/>
      
    </div>
  )
}

export default Landingpage
