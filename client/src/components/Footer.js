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
          <div className="flex-center">
            {/* Facebook */}
            <a className="fb-ic" href='https://www.facebook.com/jonathan.giler.9' target='_blank' rel='noopener noreferrer' aria-label='facebook' >
              <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-5x" aria-label='facebook' >
                
              </i>
            </a>
            {/* Twitter */}
            <a className="tw-ic" href='https://twitter.com/' target='_blank' rel='noopener noreferrer' aria-label='twitter'>
              <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-5x">
                
              </i>
            </a>
            {/* Google +*/}
            <a className="gplus-ic" href='https://aboutme.google.com/u/0/?referer=gplus' target='_blank' rel='noopener noreferrer' aria-label='google-plus'>
              <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-5x">
         
              </i>
            </a>
            {/*Linkedin */}
            <a className="li-ic" href='https://www.linkedin.com/feed/' target='_blank' rel='noopener noreferrer' aria-label='linkedin'>
              <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-5x">
              
              </i>
            </a>
            {/*Instagram*/}
            <a className="ins-ic" href='https://www.instagram.com/jonathangiler/' target='_blank' rel='noopener noreferrer' aria-label='instagram'>
              <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-5x">
                
              </i>
            </a>
            {/*Pinterest*/}
            <a className="pin-ic" href='https://www.pinterest.com/' target='_blank' rel='noopener noreferrer' aria-label='pinterest'>
              <i className="fab fa-pinterest fa-lg white-text fa-5x"> </i>
            </a>
          </div>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row*/}
    </div>
    {/* Footer Elements */}
    {/* Copyright */}
    <div className="footer-copyright text-center py-3 footertext">
      © 2019 Copyright by 
    </div>
    <NavLink exact to="/" className="logo">
      <img
        src="https://truevapeusa.com/wp-content/uploads/2019/03/Chill-Logo.png"
        alt="chill logo"
        className="footerlogo"
      />
    </NavLink>
  </footer>
);

export default Footer;
