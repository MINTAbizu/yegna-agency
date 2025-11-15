import React from 'react'
import Productlist from './product/Productlist'
import HorizontalProductList from './HorizontalScrollProducts/HorizontalScrollProducts'
import Handmadeproduct from './Handmadeproduct/Handmadeproduct'
import UserExample from './User/UserExample'
import RewardsList from './Rewardcard/RewardsList'
import BrowseAllProducts from './BrowseAllProducts/BrowseAllProducts'
import PromotionCarousel from './PromotionCarousel/PromotionCarousel'

function Landingpage() {
  return (
    <div>
        <Home/>
                    <Productlist/>
                    <HorizontalProductList/>
                    <Handmadeproduct/>
                    <UserExample/>
                    <RewardsList/>
                    <BrowseAllProducts/>
                    <PromotionCarousel/>
      
    </div>
  )
}

export default Landingpage
