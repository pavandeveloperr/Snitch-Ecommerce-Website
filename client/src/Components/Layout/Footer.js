import React from "react";
import {SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter} from 'react-icons/sl';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="container-fluid text-white p-3"
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
      }}
    >
      <div className="mt-3">
        <h3 className="text-center">Want to Partner with us ?</h3>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <center><button className="btn btn-block btn-outline-light">Get Started</button></center>
        <hr />
      </div>

      <div className="row justify-content-around text-center text-md-start">
        <div className="col-md-2 text-center">
          <h4 className="footer-brand">SNITCH</h4>
          <p>Discover Your Style</p>
        </div>
        <div className="col-md-2">
          <ul className="list-unstyled">
            <li className="fw-bold my-2">Links</li>
            <li><Link to='/privacypolicy' className="text-decoration-none text-white">Privacy Policy</Link></li>
            <li><a href='#' className="text-decoration-none text-white">Social Media</a></li>
            <li><a href='#' className="text-decoration-none text-white">Branding</a></li>
          </ul>
        </div>

        <div className="col-md-2">
          <ul className="list-unstyled">
            <li className="fw-bold my-2">About</li>
            <li><Link to='/about' className="text-decoration-none text-white">Our Project</Link></li>
            <li><a href="#" className="text-decoration-none text-white">Careers</a></li>
          </ul>
        </div>

        <div className="col-md-2">
          <ul className="list-unstyled">
            <li className="fw-bold my-2">Support</li>
            <li><Link to='/contact' className="text-decoration-none text-white">Contact</Link></li>
            <li><a href="#" className="text-decoration-none text-white">Support Request</a></li>
          </ul>
        </div>

        <div className="col-md-2">
            <li className="fw-bold my-2 list-unstyled mx-5">Follow us</li>
            <ul className="list-unstyled d-flex justify-content-center justify-conten-md-start">
            <li><a href="#" className="text-decoration-none text-white mx-2"><SlSocialInstagram /></a></li>
            <li><a href="#" className="text-decoration-none text-white mx-2"><SlSocialLinkedin /></a></li>
            <li><a href="#" className="text-decoration-none text-white mx-2"><SlSocialFacebook /></a></li>
            <li><a href="#" className="text-decoration-none text-white mx-2"><SlSocialTwitter /></a></li>
          </ul>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-12 text-center pt-2">
            <p>&copy; 2023 Copyright <a href="https://linkedin.com/in/pavankulkarnii" target="_blank" className="text-decoration-none text-white">Pavan Kulkarni</a></p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Footer;
