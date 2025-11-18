import React, { useEffect, useState } from "react";
import axios from "axios";

const MyPurchases = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get("http://localhost:5000/api/orders/my-orders");
      setOrders(res.data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="container py-4">
      <h2>My Purchases</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Download</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o._id}>
              <td>{o.productId.productName}</td>
              <td>{o.price} ETB</td>
              <td>
                {o.status === "paid" ? (
                  <a href={`http://localhost:5000/api/download/${o._id}`} className="btn btn-sm btn-success">
                    Download now
                  </a>
                ) : (
                  "Pending"
                )}
              </td>
              <td>{new Date(o.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPurchases;
// 


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyPurchases = ({ currentUser }) => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const res = await axios.get(`http://localhost:5000/api/orders/user/${currentUser.id}`);
//       setOrders(res.data.filter(o => o.status === 'paid'));
//     };
//     fetchOrders();
//   }, [currentUser.id]);

//   const handleDownload = (orderId) => {
//     window.open(`http://localhost:5000/api/orders/download/${orderId}`);
//   };

//   return (
//     <div className="container py-4">
//       <h2>My Purchases</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Type</th>
//             <th>Price</th>
//             <th>Download</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map(order => (
//             <tr key={order._id}>
//               <td>{order.product.productName}</td>
//               <td>{order.productType}</td>
//               <td>{order.price} ETB</td>
//               <td>
//                 {order.productType === 'DigitalProduct' ? (
//                   <button className="btn btn-sm btn-primary" onClick={() => handleDownload(order._id)}>Download</button>
//                 ) : 'N/A'}
//               </td>
//               <td>{new Date(order.createdAt).toLocaleDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyPurchases;
