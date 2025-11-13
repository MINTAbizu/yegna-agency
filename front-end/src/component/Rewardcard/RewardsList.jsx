import React from "react";
import RewardCard from "./RewardCard";
// import RewardCard from "./RewardCard";

const RewardsList = () => {
  const rewards = [
    {
      brand: "Minte",
      title: "Minte",
      logo: "https://via.placeholder.com/80",
      rate: "100.00 ETB / View",
      description: "Earn ETB 100 per 1,000 views on ye-buna UGC Videos!",
      paid: 129815.4,
      total: 200000,
      progress: 65,
      type: "UGC",
      platforms: ["Instagram", "TikTok", "YouTube"],
      metricLabel: "Views",
      metricValue: 2017054,
    },
    {
      brand: "Yegna-Market",
      title: "Yegna-Market",
      logo: "https://via.placeholder.com/80",
      rate: "100.00 ETB / View",
      description: "Earn ETB 100 per 1,000 views Creating Tina Mart Application Videos!",
      paid: 95545.4,
      total: 100000,
      progress: 96,
      type: "UGC",
      platforms: ["Instagram", "TikTok", "YouTube"],
      metricLabel: "Views",
      metricValue: 955454,
    },
     {
      brand: "Yegna-Market",
      title: "Yegna-Market",
      logo: "https://via.placeholder.com/80",
      rate: "100.00 ETB / View",
      description: "Earn ETB 100 per 1,000 views Creating Tina Mart Application Videos!",
      paid: 95545.4,
      total: 100000,
      progress: 96,
      type: "UGC",
      platforms: ["Instagram", "TikTok", "YouTube"],
      metricLabel: "Views",
      metricValue: 955454,
    },
     {
      brand: "Yegna-Market",
      title: "Yegna-Market",
      logo: "https://via.placeholder.com/80",
      rate: "100.00 ETB / View",
      description: "Earn ETB 100 per 1,000 views Creating Tina Mart Application Videos!",
      paid: 95545.4,
      total: 100000,
      progress: 96,
      type: "UGC",
      platforms: ["Instagram", "TikTok", "YouTube"],
      metricLabel: "Views",
      metricValue: 955454,
    },
     {
      brand: "Yegna-Market",
      title: "Yegna-Market",
      logo: "https://via.placeholder.com/80",
      rate: "100.00 ETB / View",
      description: "Earn ETB 100 per 1,000 views Creating Tina Mart Application Videos!",
      paid: 95545.4,
      total: 100000,
      progress: 96,
      type: "UGC",
      platforms: ["Instagram", "TikTok", "YouTube"],
      metricLabel: "Views",
      metricValue: 955454,
    },
     {
      brand: "Yegna-Market",
      title: "Yegna-Market",
      logo: "https://via.placeholder.com/80",
      rate: "100.00 ETB / View",
      description: "Earn ETB 100 per 1,000 views Creating Tina Mart Application Videos!",
      paid: 95545.4,
      total: 100000,
      progress: 96,
      type: "UGC",
      platforms: ["Instagram", "TikTok", "YouTube"],
      metricLabel: "Views",
      metricValue: 955454,
    },
    
    // Add more objects...
  ];

  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        padding: "20px",
      }}
    >
      {rewards.map((r, i) => (
        <RewardCard reward={r} key={i} />
      ))}
    </div>
  );
};

export default RewardsList;
