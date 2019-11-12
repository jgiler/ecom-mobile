/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer className="page-footer font-small cyan darken-3">
    <div className="container">
      {/* Grid row*/}
      <div className="row">
        {/* Grid column */}
        <div className="col-md-12 py-5" id="social-icon">
          <div className=" flex-center">
            {/* Facebook */}
            <a className="fb-ic" href='https://www.facebook.com/jonathan.giler.9' target='_blank'>
              <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                
              </i>
            </a>
            {/* Twitter */}
            <a className="tw-ic" href='https://twitter.com/' target='_blank'>
              <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                
              </i>
            </a>
            {/* Google +*/}
            <a className="gplus-ic" href='https://aboutme.google.com/u/0/?referer=gplus' target='_blank'>
              <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
         
              </i>
            </a>
            {/*Linkedin */}
            <a className="li-ic" href='https://www.linkedin.com/feed/' target='_blank'>
              <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
              
              </i>
            </a>
            {/*Instagram*/}
            <a className="ins-ic" href='#' target='_blank'>
              <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                
              </i>
            </a>
            {/*Pinterest*/}
            <a className="pin-ic" href='#' target='_blank'>
              <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
            </a>
          </div>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row*/}
    </div>
    {/* Footer Elements */}
    {/* Copyright */}
    <div className="footer-copyright text-center py-3">
      © 2019 Copyright by 
    </div>
    <NavLink exact to="/" className="logo">
      <img
        src="https://bit.ly/2TBdjIN"
        alt="chill logo"
        className="footerlogo"
      />
    </NavLink>
  </footer>
);

export default Footer;
