import React, { useEffect, useState } from "react";

const OurCustomers = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/profile/approved");
        const data = await res.json();
        setProfiles(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfiles();
  }, []);

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Our Customers</h2>
      <div className="row">
        {profiles.length > 0 ? (
          profiles.map((p) => (
            <div key={p._id} className="col-6 col-sm-4 col-md-3 mb-3">
              <div className="card text-center shadow-sm p-2">
                <img
                  src={p.avatar ? `http://localhost:5000/${p.avatar}` : "https://via.placeholder.com/100"}
                  alt={p.user?.name}
                  className="rounded-circle mx-auto mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h6 className="mb-1">{p.user?.name}</h6>
                <small>{p.field}</small>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No approved customers yet.</p>
        )}
      </div>
    </section>
  );
};

export default OurCustomers;
