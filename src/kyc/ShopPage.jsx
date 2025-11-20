import React from "react";
import { useAuth } from "../Context/Authcontext";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

const ShopPage = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user?.kycSubmitted || !user?.profileCompleted) {
    alert("Please complete your KYC and Profile first!");
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <DashboardLayout>
      <h2>Welcome to the Shop!</h2>
      <p>Here you can view and buy products.</p>
    </DashboardLayout>
  );
};

export default ShopPage;
