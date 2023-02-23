import React, { useEffect } from 'react'
import "./Header.css"


window.addEventListener("load", (event) => {
  window.userWalletAddress = null;
  var loginButton = document.getElementById("loginButton");
  var userWallet = document.getElementById("userWallet");

  const connectMetamask = function (){
    console.log('click')
    if (!window.ethereum) {
      alert("MetaMask is not installed");
      return false;}
  
    async function loginWithMetaMask() {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" }).catch((e) => {
        console.error(e.message);
        });
        if (!accounts) {return;}
      
        window.userWalletAddress = accounts[0];
        console.log(window.userWalletAddress)
        userWallet.innerText = window.userWalletAddress;
        loginButton.innerText = "Sign out";
        return;
      };
    
      loginWithMetaMask()
  };
  loginButton.addEventListener("click", connectMetamask);

});



function Header() {
  return (
    <div>

<section className="header" id="title">
      <div className="container-fluid">
         {/* Navbar  */}

        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">
            <img src="./logo.jpg" alt="Angster" width="240" height="90" className="d-inline-block align-text-top" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <button className="nav-link" id='loginButton'>Sign in</button>
                <p id='userWallet'></p>
              </li>

              <li className="nav-item">
                <a className="nav-link">About Us</a>
              </li>
            </ul>
          </div>
        </nav>

         {/* Title  */}

        <div className="intro">
          <h1 className="big-heading">Revolutionizing fan engagements through <span>Quests</span></h1>

          <p>
            Angster is a protocol that aims to revolutionize fan engagemnt throug Quests, Tokens and Rewards powered by
            blockchain Technology. These are designed to enable tokenization and GameFi economies for the fans in
            decentralised platform
          </p>

          <button type="button" className="btn btn-dark btn-lg first">Get early access</button>
          <button type="button" className="btn btn-outline-dark btn-lg second">Join Discord</button>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Header