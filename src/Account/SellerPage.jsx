import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/Authcontext";

const SellerPage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    platform: "",
    username: "",
    followers: "",
    price: "",
  });
  const [message, setMessage] = useState("");
  const [myAccounts, setMyAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const fetchMyAccounts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:5000/api/accounts/myselleraccounts",
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setMyAccounts(res.data);
    } catch (err) {
      console.error(err);
      setMessage("Error fetching accounts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchMyAccounts();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/accounts",
        formData,
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setMessage("Account posted successfully!");
      setFormData({ platform: "", username: "", followers: "", price: "" });
      fetchMyAccounts();
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to post account");
    }
  };

  if (!user) return <p className="text-center mt-10">Please log in to post an account.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Post an Account</h2>

        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10">
          <input
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            placeholder="Platform (e.g., Instagram)"
            required
            className="border p-3 rounded shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="border p-3 rounded shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="followers"
            value={formData.followers}
            onChange={handleChange}
            type="number"
            placeholder="Followers"
            required
            className="border p-3 rounded shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            type="number"
            placeholder="Price"
            required
            className="border p-3 rounded shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded transition"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post Account"}
          </button>
        </form>

        <h3 className="text-2xl font-bold mb-4">My Accounts</h3>
        {myAccounts.length === 0 ? (
          <p className="text-gray-500">{loading ? "Loading..." : "You have not posted any accounts yet."}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {myAccounts.map((acc) => (
              <div
                key={acc._id}
                className="bg-white shadow-lg rounded-lg p-5 flex flex-col justify-between hover:scale-105 transform transition duration-300"
              >
                <div>
                  <h4 className="text-lg font-bold mb-2">{acc.platform}</h4>
                  <p className="text-gray-700"><span className="font-semibold">Username:</span> {acc.username}</p>
                  <p className="text-gray-700"><span className="font-semibold">Followers:</span> {acc.followers}</p>
                  <p className="text-gray-700"><span className="font-semibold">Price:</span> ${acc.price}</p>
                </div>
                <p
                  className={`mt-3 font-semibold ${
                    acc.status === "available" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Status: {acc.status.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerPage;