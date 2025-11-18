import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { AuthProvider } from './Context/Authcontext';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import Landingpage from './component/Landingpage';
import Register from './pages/Register';
import Login from './pages/Login';
import BrowseAllProducts from './component/BrowseAllProducts/BrowseAllProducts';
import UserProfileFormFixed from './kyc/UserProfileFormFixed';
import DashboardLayout from './kyc/DashboardLayout';
import SellerPage from './Account/SellerPage';
import OrdersDashboard from './component/Shope/userprofilepage/OrdersDashboard';
import ListingsDashboard from './component/Shope/userprofilepage/ListingsDashboard';
import AffiliateOrders from './component/Shope/userprofilepage/AffiliateOrders';
import AddDigitalProduct from './component/Shope/userprofilepage/AddDigitalProduct';
import AddBook from './component/Shope/userprofilepage/AddBook';
import SellSocialMediaAccount from './component/Shope/userprofilepage/SellSocialMediaAccount';
import FullMultiStepKYC from './kyc/FullMultiStepKYC';
import AdminUsersTable from './Admin/AdminUsersTable/AdminUsersTable';
import AdminDashboard from './Admin/AdminDashboard';
import AdminKYCList from './Admin/AdminUsersTable/AdminKYCList';
import AdminProfileList from './Admin/AdminUsersTable/AdminProfileList';
import AdminDigitalProductsTable from './Admin/products/AdminDigitalProductsTable';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* admin */}
          <Route path="/AdminUsersTable" element={<AdminUsersTable />} />


          {/* Protected Routes */}
          <Route
            path="/BrowseAllProducts"
            element={
              <ProtectedRoute>
                <BrowseAllProducts />
              </ProtectedRoute>
            }
          />

          <Route
            path="/UserProfile"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <UserProfileFormFixed />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />  
               <Route
            path="/RecognitionForm"
            element={
                  <FullMultiStepKYC />
            }
          />
          {/* Account/Selling Pages */}
          <Route
            path="/marketplace"
            element={
              <ProtectedRoute>
                <SellerPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                {/* <DashboardLayout> */}
                  <OrdersDashboard />
                {/* </DashboardLayout> */}
              </ProtectedRoute>
            }
          />

          <Route
            path="/listings"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <ListingsDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/affiliate"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AffiliateOrders />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/digitalproduct"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AddDigitalProduct />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />  
                        <Route
                  path="/AdminKYCList"
                  element={
                    <AdminDashboard>
                      <AdminKYCList />
                    </AdminDashboard>
                  }
                />   
                      <Route
                  path="/AdminProfileList"
                  element={
                    <AdminDashboard>
                      <AdminProfileList />
                    </AdminDashboard>
                  }
                />   
                 <Route
                  path="/AdminUsersTable"
                  element={
                    <AdminDashboard>
                      <AdminUsersTable />
                    </AdminDashboard>
                  }
                />    
                 <Route
                  path="/AdminDigitalProductsTable"
                  element={
                    <AdminDashboard>
                      <AdminDigitalProductsTable />
                    </AdminDashboard>
                  }
                /> 

          

          <Route
            path="/addbook"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <AddBook />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/socialmediaaccount"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <SellSocialMediaAccount />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
