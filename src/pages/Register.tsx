import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    role: "POLICYHOLDER",
  });

  const handleSubmit = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, form);
      alert("User registered!");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="POLICYHOLDER">Policyholder</option>
        <option value="CLAIM_OFFICER">Claim Officer</option>
      </select>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
