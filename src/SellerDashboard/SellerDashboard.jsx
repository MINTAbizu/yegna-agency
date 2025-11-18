import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SellerDashboard = ({ currentUser }) => {
  const [orders, setOrders] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get(`http://localhost:5000/api/orders/seller/${currentUser.id}`);
      setOrders(res.data);
      setBalance(currentUser.balance); // assuming currentUser.balance is updated
    };
    fetchOrders();
  }, [currentUser.id]);

  const requestWithdrawal = async () => {
    alert('Withdrawal request sent to admin!');
    // Optionally: send POST /api/withdrawals
  };

  return (
    <div className="container py-4">
      <h2>Seller Dashboard</h2>
      <p>Total Earnings: {balance} ETB</p>
      <button className="btn btn-success mb-3" onClick={requestWithdrawal}>Request Withdrawal</button>

      <h3>Orders</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Buyer</th>
            <th>Type</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.product.productName}</td>
              <td>{order.buyer.name}</td>
              <td>{order.productType}</td>
              <td>{order.price} ETB</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerDashboard;
