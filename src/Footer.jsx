import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="container-fluid">
          <div
          className="one"><h2>Angster</h2>

          <div >
          <i className="fa-brands fa-twitter fa-2x"></i>
          <i className="fa-brands fa-discord fa-2x"></i>
          </div>
          </div>
          <div className="two">
          <p>@ Copyright 2022 Angster</p>
          <p>All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
