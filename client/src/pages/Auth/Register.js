import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import "../../Styles/authStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // form-submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/v1/auth/register",
        { name, email, password, phone, address }
      );
      if(res && res.data.success){
        toast.success(res && res.data.message, {
            duration: 4000,
        });
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  };

  return (
    <Layout title="Register - Snitch">
      <div className="form-container">
        <form className="mt-4" onSubmit={handleSubmit}>
        <h1 className="text-center">REGISTER FORM</h1>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone"
              aria-describedby="emailHelp"
              placeholder="Enter your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              aria-describedby="emailHelp"
              placeholder="Enter your address"
              required
            />
          </div>
          <button type="submit" className="btn-hover color-3">
            SIGN UP
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
