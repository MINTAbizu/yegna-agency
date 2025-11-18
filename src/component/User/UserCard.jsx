import React from "react";
import "../User/UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-img-box">
        <img src={user.image} alt={user.name} />
      </div>

      <h3 className="user-name">{user.name}</h3>
      <p className="user-desc">{user.description}</p>

      <button className="contact-btn">Contact</button>
    </div>
  );
};

export default UserCard;
