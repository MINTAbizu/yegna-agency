import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from './component/Header/Header';
import Footer from './component/footer/Footer';

import Register from './pages/Register';
import BrowseAllProducts from './component/BrowseAllProducts/BrowseAllProducts';
import Login from './pages/Login';
// import KycDashboardWithHeader from './kyc/KycDashboardWithHeader';
// import RecognitionForm from './kyc/RecognitionForm';
// import DashboardLayout from './kyc/DashboardLayout';
// import FullKYCFlow from './kyc/MultiStepKYC';
import Landingpage from './component/Landingpage';
import FullMultiStepKYC from './kyc/FullMultiStepKYC';
// import AdminPanel from './Admin/AdminPanel';
// import KYCDetails from './Admin/KYCDetails';
// import Analytics from './Admin/Analytics';
// import Sidebar from './Admin/Sidebar';
import UserProfileFormFixed from './kyc/UserProfileFormFixed';
import DashboardLayout from './kyc/DashboardLayout';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Marketplace from './Account/Marketplace';

import SellerPage from './Account/SellerPage';
import OrdersDashboard from './component/Shope/userprofilepage/OrdersDashboard';
import ListingsDashboard from './component/Shope/userprofilepage/ListingsDashboard';
import AffiliateOrders from './component/Shope/userprofilepage/AffiliateOrders';
import AddDigitalProduct from './component/Shope/userprofilepage/AddDigitalProduct';
import AddBook from './component/Shope/userprofilepage/AddBook';
import SellSocialMediaAccount from './component/Shope/userprofilepage/SellSocialMediaAccount';
function App() {
  return (
    <Router>
     
       
      <Routes>
        <Route path="/" element={
          <>
           
         
             <Landingpage/>
          </>
        } />

         <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BrowseAllProducts" element={
             <ProtectedRoute> 
          <BrowseAllProducts/>
             </ProtectedRoute> 
          
          } />

       
        {/* <Route path="/KycDashboardWithHeader" element={<KycDashboardWithHeader />} />  */} 
        <Route path="/RecognitionForm" element={
          
          <FullMultiStepKYC/> }
           />
        <Route path="/UserProfile" element={
            <ProtectedRoute> 
          <DashboardLayout> 

          <UserProfileFormFixed/>
          </DashboardLayout>
            </ProtectedRoute> 
           } />
           {/* Account selling */}
                            <Route
                    path="/marketplace"
                    element={
                      <ProtectedRoute>
                        <SellerPage />
                      </ProtectedRoute>
                    }
                  />
{/* Admin */}

         {/* <Route path="/admin/kyc" element={<AdminPanel />} />
            <Route path="/admin/kyc/:id" element={<KYCDetails />} />
            <Route path="/admin/analytics" element={<Analytics />} />
            <Route path="Sidebar" element={<Sidebar />} /> */}



            {/* Shop */}
             

                {/* <Route path="/shop" element={<ShopPage />} /> */}
                <Route path="/orders" element={<OrdersDashboard />} />

                <Route path="/listings" element={<ListingsDashboard />} />
                <Route path="/affiliate" element={<AffiliateOrders />} />
                {/* <Route path="/claims" element={<ClaimsPage />} /> */}
                <Route path="/digitalproduct" element={<AddDigitalProduct />} />
                <Route path="/addbook" element={<AddBook />} />
                <Route path="/socialmediaaccount" element={
                  <DashboardLayout> 
                  <SellSocialMediaAccount />
                  </DashboardLayout> 
                  } />


      </Routes>
     
       
    </Router>
  );
}

export default App;
