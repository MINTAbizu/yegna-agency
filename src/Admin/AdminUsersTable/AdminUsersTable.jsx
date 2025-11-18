import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const AdminUsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
      } catch (error) {
        console.log("Failed to load users", error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(users.filter((u) => u._id !== id));
    } catch (error) {
      alert("Error deleting user");
    }
  };

  return (
    <div className="table-responsive" style={{ width: "100%" }}>
      <table className="table table-sm table-bordered table-hover text-center align-middle mb-0" style={{ fontSize: "0.75rem" }}>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u._id} style={{ height: "30px" }}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.createdAt?.slice(0, 10)}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary mx-1 p-1" title="View">
                  <FaEye size={12} />
                </button>
                <button className="btn btn-sm btn-outline-success mx-1 p-1" title="Edit">
                  <FaEdit size={12} />
                </button>
                <button onClick={() => handleDelete(u._id)} className="btn btn-sm btn-outline-danger mx-1 p-1" title="Delete">
                  <FaTrash size={12} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsersTable;
