import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import "../../Styles/authStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // form-submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res && res.data.message, {
          duration: 4000,
        });
        navigate("/homepage");
      } else {
        toast.error(res.data.message, {
            duration: 3000,
          });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login - Snitch">
      <div className="form-container">
        <form className="mt-4" onSubmit={handleSubmit}>
          <h1 className="text-center">LOGIN</h1>
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
          <button type="submit" className="btn-hover color-3">
            LOG IN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
