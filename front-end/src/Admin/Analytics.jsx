import React, { useEffect, useState } from "react";
import API from "../Api/axios";
import { Pie } from "react-chartjs-2";
import Loading from "./Loading";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = () => {
  const [kycs, setKycs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    fetchKYCs();
  }, []);

  if (loading) return <Loading />;

  const statusCounts = kycs.reduce(
    (acc, kyc) => {
      acc[kyc.status] = (acc[kyc.status] || 0) + 1;
      return acc;
    },
    { Pending: 0, Approved: 0, Rejected: 0 }
  );

  const data = {
    labels: ["Pending", "Approved", "Rejected"],
    datasets: [
      {
        data: [statusCounts.Pending, statusCounts.Approved, statusCounts.Rejected],
        backgroundColor: ["#fbbf24", "#10b981", "#ef4444"],
      },
    ],
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">KYC Analytics</h2>
      <Pie data={data} />
    </div>
  );
};

export default Analytics;
