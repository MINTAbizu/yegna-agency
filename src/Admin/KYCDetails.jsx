import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../Api/axios";
import Loading from "./Loading";

const KYCDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [kyc, setKyc] = useState(null);
  const [status, setStatus] = useState("");
  const [adminComment, setAdminComment] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchKYC = async () => {
    try {
      const res = await API.get(`/admin/kyc/${id}`);
      setKyc(res.data);
      setStatus(res.data.status);
      setAdminComment(res.data.adminComment || "");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKYC();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await API.put(`/admin/kyc/${id}`, { status, adminComment });
      alert("KYC updated successfully");
      navigate("/admin/kyc");
    } catch (err) {
      console.log(err);
    }
  };

  if (loading || !kyc) return <Loading />;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">KYC Details</h2>

      <p><strong>User:</strong> {kyc.userId?.name}</p>
      <p><strong>Email:</strong> {kyc.userId?.email}</p>
      <p><strong>Status:</strong> {kyc.status}</p>

      <div className="my-4">
        <h3 className="font-bold">Uploaded Documents</h3>
        <div className="flex gap-4 mt-2">
          {kyc.faceId && <img src={kyc.faceId} alt="Face ID" className="w-32 h-32 object-cover" />}
          {kyc.idFront && <img src={kyc.idFront} alt="ID Front" className="w-32 h-32 object-cover" />}
          {kyc.idBack && <img src={kyc.idBack} alt="ID Back" className="w-32 h-32 object-cover" />}
        </div>
      </div>

      <div className="my-4">
        <label className="block font-bold">Update Status</label>
        <select
          className="border p-2 w-64 mt-1"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="my-4">
        <label className="block font-bold">Admin Comment</label>
        <textarea
          className="border p-2 w-full"
          value={adminComment}
          onChange={(e) => setAdminComment(e.target.value)}
        />
      </div>

      <button
        onClick={handleUpdate}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default KYCDetails;
