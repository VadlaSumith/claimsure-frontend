import React, { useState } from "react";
import axios from "axios";

const SubmitClaim = () => {
  const [form, setForm] = useState({
    policyNumber: "",
    description: "",
    amount: ""
  });

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/claims/submit`, form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert("Claim submitted!");
      setForm({ policyNumber: "", description: "", amount: "" });
    } catch (err) {
      alert("Failed to submit claim");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Submit a Claim</h2>
      <input
        placeholder="Policy Number"
        value={form.policyNumber}
        onChange={(e) => setForm({ ...form, policyNumber: e.target.value })}
      />
      <br />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <br />
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitClaim;
