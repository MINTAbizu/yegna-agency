// UserProfileFormFixed.jsx
import React, { useState } from "react";
import { useAuth } from "../Context/Authcontext";

const ETHIOPIA_REGIONS = [
  "Addis Ababa", "Afar", "Amhara", "Benishangul-Gumuz", "Dire Dawa",
  "Gambela", "Harari", "Oromia", "Sidama", "Somali",
  "South West Ethiopia Peoples' Region", "Tigray"
];

const PROFESSIONAL_FIELDS = [
  "Cybersecurity", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Mobile App Developer", "UI/UX Designer", "Graphic Designer", "Data Scientist",
  "Data Analyst", "Machine Learning Engineer", "Network Engineer", "DevOps Engineer",
  "Cloud Engineer", "Database Administrator", "Software Engineer", "IT Support / Helpdesk",
  "System Administrator", "Digital Marketer", "Social Media Manager", "Content Creator",
  "Video Editor", "Photographer", "Lawyer", "Accountant", "Teacher", "Engineer",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Entrepreneur",
  "Sales / Marketing", "Freelancer", "Other"
];

const UserProfileFormFixed = () => {
  const { user } = useAuth();
  const [about, setAbout] = useState("");
  const [region, setRegion] = useState("");
  const [shopLocation, setShopLocation] = useState("");
  const [telegram, setTelegram] = useState("");
  const [field, setField] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAvatarChange = (e) => setAvatar(e.target.files[0]);
  const handleBackgroundChange = (e) => setBackgroundImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("User not logged in");

    setLoading(true);
    const profileData = new FormData();
    profileData.append("about", about);
    profileData.append("region", region);
    profileData.append("shopLocation", shopLocation);
    profileData.append("telegram", telegram);
    profileData.append("field", field);
    if (avatar) profileData.append("avatar", avatar);
    if (backgroundImage) profileData.append("backgroundImage", backgroundImage);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/profile/create", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: profileData,
      });

      if (!res.ok) throw new Error("Failed to create profile");
      const result = await res.json();
      alert(result.message || "Profile created successfully!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card mx-auto shadow" style={{ maxWidth: "600px" }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4">User Profile</h2>

        {/* Avatar */}
        <div className="d-flex flex-column align-items-center mb-4">
          <img
            src={avatar ? URL.createObjectURL(avatar) : "https://via.placeholder.com/100"}
            alt="User Avatar"
            className="rounded-circle border border-3 border-primary mb-2"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <input
            type="file"
            accept="image/*"
            className="form-control my-2"
            onChange={handleAvatarChange}
          />
          {/* <button type="button" onClick={copyLink} className="btn btn-primary px-4 py-2">
            Copy Your Profile Link
          </button> */}
        </div>

        {/* Background Image */}
        <div className="mb-3">
          <label className="form-label">Background Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleBackgroundChange}
          />
          {backgroundImage && (
            <img
              src={URL.createObjectURL(backgroundImage)}
              alt="Background Preview"
              className="mt-2 rounded"
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">About</label>
            <textarea
              className="form-control"
              value={about}
              maxLength={500}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Write something about yourself..."
            />
            <small className="text-muted">{about.length}/500</small>
          </div>

          <div className="mb-3">
            <label className="form-label">Region</label>
            <select
              className="form-select"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="">Select Region</option>
              {ETHIOPIA_REGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Field / Profession</label>
            <select
              className="form-select"
              value={field}
              onChange={(e) => setField(e.target.value)}
            >
              <option value="">Select your field</option>
              {PROFESSIONAL_FIELDS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Shop/Home Location</label>
            <input
              type="text"
              className="form-control"
              value={shopLocation}
              onChange={(e) => setShopLocation(e.target.value)}
              placeholder="Enter your shop/home location"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Telegram Username</label>
            <input
              type="text"
              className="form-control"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              placeholder="Without @"
            />
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-success" disabled={loading}>
              {loading ? "Updating..." : "Save Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileFormFixed;
