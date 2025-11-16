// src/pages/Marketplace.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountCard from "../Account/AccountCard";
import { useAuth } from "../Context/Authcontext";

const Marketplace = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/accounts");
      setAccounts(res.data);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBuy = async (accountId) => {
    if (!user) return alert("You must be logged in to buy an account.");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/transactions",
        { accountId },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert("Transaction created! Await admin verification.");
      fetchAccounts(); // refresh status
    } catch (error) {
      console.error("Purchase failed:", error);
      alert(error.response?.data?.message || "Purchase failed.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading accounts...</p>;

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {accounts.map((account) => (
        <AccountCard key={account._id} account={account} onBuy={handleBuy} />
      ))}
    </div>
  );
};

export default Marketplace;
