import React, { useEffect, useState } from "react";
import '../Admin.css'
const AdminKYCList = () => {
  const [kycList, setKycList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all KYC submissions
  const fetchKYC = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/kyc", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setKycList(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKYC();
  }, []);

  // Delete a KYC submission
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this KYC?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/kyc/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setKycList(kycList.filter((k) => k._id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container-fluid mt-4">
      <h3>KYC Submissions</h3>
      <div className="table-responsive">
        <table className="table table-sm table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>User</th>
              <th>Full Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Marital Status</th>
              <th>ID Type</th>
              <th>ID Number</th>
              <th>Residential Address</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(kycList) && kycList.length > 0 ? (
              kycList.map((kyc) => (
                <tr key={kyc._id}>
                  <td>{kyc.user?.name || "N/A"}</td>
                  <td>{kyc.fullName}</td>
                  <td>{kyc.dob}</td>
                  <td>{kyc.gender}</td>
                  <td>{kyc.nationality}</td>
                  <td>{kyc.maritalStatus}</td>
                  <td>{kyc.idType}</td>
                  <td>{kyc.idNumber}</td>
                  <td>{kyc.residentialAddress}</td>
                  <td>
                    {/* Display thumbnails with clickable links */}
                    {kyc.faceId && (
                      <a
                        href={`http://localhost:5000/uploads/${kyc.faceId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`http://localhost:5000/uploads/${kyc.faceId}`}
                          alt="Face ID"
                          width="50"
                          className="img-thumbnail me-1"
                        />
                      </a>
                    )}
                    {kyc.idFront && (
                      <a
                        href={`http://localhost:5000/uploads/${kyc.idFront}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`http://localhost:5000/uploads/${kyc.idFront}`}
                          alt="ID Front"
                          width="50"
                          className="img-thumbnail me-1"
                        />
                      </a>
                    )}
                    {kyc.idBack && (
                      <a
                        href={`http://localhost:5000/uploads/${kyc.idBack}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`http://localhost:5000/uploads/${kyc.idBack}`}
                          alt="ID Back"
                          width="50"
                          className="img-thumbnail"
                        />
                      </a>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(kyc._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="text-center">
                  No KYC submissions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminKYCList;
