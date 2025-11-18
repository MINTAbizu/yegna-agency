import React from "react";
import "./RewardCard.css";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const RewardCard = ({ reward }) => {
  return (
    <div className="reward-card">
      {/* Header */}
      <div className="reward-header">
        <img src={reward.logo} alt={reward.brand} className="reward-logo" />
        <div>
          <h4>{reward.brand}</h4>
          <p className="reward-title">{reward.title}</p>
        </div>
      </div>

      {/* Earnings */}
      <h3 className="reward-rate">{reward.rate}</h3>
      <p className="reward-description">{reward.description}</p>

      {/* Progress */}
      <div className="reward-progress">
        <div
          className="reward-progress-bar"
          style={{ width: `${reward.progress}%` }}
        ></div>
      </div>

      <p className="reward-summary">
        {reward.paid.toLocaleString()} ETB of {reward.total.toLocaleString()} ETB paid out
      </p>

      <p className="reward-percent">{reward.progress}%</p>

      {/* Footer */}
      <div className="reward-footer">
        <span className="badge">{reward.type}</span>

        <div className="platforms">
          {reward.platforms.includes("Instagram") && <FaInstagram />}
          {reward.platforms.includes("TikTok") && <FaTiktok />}
          {reward.platforms.includes("YouTube") && <FaYoutube />}
        </div>

        <span className="views">
          {reward.metricValue.toLocaleString()} {reward.metricLabel}
        </span>
      </div>
    </div>
  );
};

export default RewardCard;
