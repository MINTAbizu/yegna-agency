import React, { useEffect, useState } from "react";

const AdminProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProfiles = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setProfiles(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  // Update status: approved or rejected
  const handleStatusChange = async (id, status) => {
    if (!window.confirm(`Are you sure you want to ${status} this profile?`)) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/profile/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        setProfiles(profiles.map(p => (p._id === id ? { ...p, status } : p)));
      } else {
        alert("Failed to update status");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container-fluid mt-4">
      <h3>User Profiles</h3>
      <div className="table-responsive">
        <table className="table table-sm table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Avatar</th>
              <th>User</th>
              <th>About</th>
              <th>Region</th>
              <th>Field</th>
              <th>Shop/Home</th>
              <th>Telegram</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <tr key={profile._id}>
                  <td>
                    <img
                      src={`http://localhost:5000/${profile.avatar}`}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{profile.user?.name || "N/A"}</td>
                  <td>{profile.about || "-"}</td>
                  <td>{profile.region || "-"}</td>
                  <td>{profile.field || "-"}</td>
                  <td>{profile.shopLocation || "-"}</td>
                  <td>{profile.telegram || "-"}</td>
                  <td>
                    <span
                      className={
                        profile.status === "approved"
                          ? "badge bg-success"
                          : profile.status === "rejected"
                          ? "badge bg-danger"
                          : "badge bg-secondary"
                      }
                    >
                      {profile.status || "pending"}
                    </span>
                  </td>
                  <td>
                    {profile.status !== "approved" && (
                      <button
                        className="btn btn-success btn-sm me-1"
                        onClick={() => handleStatusChange(profile._id, "approved")}
                      >
                        Approve
                      </button>
                    )}
                    {profile.status !== "rejected" && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleStatusChange(profile._id, "rejected")}
                      >
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No profiles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProfileList;
