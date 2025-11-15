import React, { useEffect, useState } from "react";
import API from "../Api/axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const AdminPanel = () => {
  const [kycs, setKycs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchKYCs = async () => {
    try {
      const res = await API.get("/admin/kyc");
      setKycs(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKYCs();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All KYC Submissions</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Submitted At</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {kycs.map((kyc) => (
            <tr key={kyc._id}>
              <td className="p-2 border">{kyc.userId?.name}</td>
              <td className="p-2 border">{kyc.userId?.email}</td>
              <td className="p-2 border">{kyc.status}</td>
              <td className="p-2 border">{new Date(kyc.createdAt).toLocaleString()}</td>
              <td className="p-2 border">
                <Link
                  to={`/admin/kyc/${kyc._id}`}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
