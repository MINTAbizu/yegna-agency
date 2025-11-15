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

function App() {
  return (
    <Router>
      <Header />
       
      <Routes>
        <Route path="/" element={
          <>
           
         
             <Landingpage/>
          </>
        } />

         <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BrowseAllProducts" element={<BrowseAllProducts/>} />

       
        {/* <Route path="/KycDashboardWithHeader" element={<KycDashboardWithHeader />} />  */} */}
        <Route path="/RecognitionForm" element={<FullMultiStepKYC/> } />
{/* Admin */}

         {/* <Route path="/admin/kyc" element={<AdminPanel />} />
            <Route path="/admin/kyc/:id" element={<KYCDetails />} />
            <Route path="/admin/analytics" element={<Analytics />} /> */}
      </Routes>
      <Footer />
       
    </Router>
  );
}

export default App;
