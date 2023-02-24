import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import "../../pages/Styles/authStyles.css"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // form-submit function
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, password, address, phone)
  }


  return (
    <Layout title="Register - Snitch">
      <div className="form-container">
        <h1>Create an Account</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-hover color-3">
            Sign Up
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
