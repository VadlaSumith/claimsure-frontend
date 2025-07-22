import React, { useEffect, useState } from "react";
import axios from "axios";

interface Claim {
  policyNumber: string;
  amount: number;
  status: string;
}

const Dashboard = () => {
  const [claims, setClaims] = useState<Claim[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get<Claim[]>(`${import.meta.env.VITE_API_URL}/claims/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setClaims(res.data))
      .catch((err) => alert("Error fetching claims"));
  }, []);

  return (
    <div>
      <h2>My Claims</h2>
      <ul>
        {claims.map((claim, index) => (
          <li key={index}>
            {claim.policyNumber} - ${claim.amount} - {claim.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
