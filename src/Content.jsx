import React from "react";
import Explore from "./Explore";

import Reward from "./Reward";
import Quest from "./Quest";
import Tokens from "./Tokens";
import "./Content.css";
import "./style1.scss";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Content() {
  return (
    <Router>
      <div>
        <section className="content">
        <div className="container-fluid">
          {/* nav */}
          {/* <button type="button" class="btn btn-outline-dark active" role="button" data-bs-toggle="button" aria-pressed="true">Explore</button>
    <button type="button" class="btn btn-outline-dark" role="button" data-bs-toggle="button" >Quest</button>
    <button type="button" class="btn btn-outline-dark" data-bs-toggle="button">Rewards</button>
    <button type="button" class="btn btn-outline-dark" data-bs-toggle="button">Tokens</button>  */}
          {/* 
        
        <h3>Explore and Follow Creators</h3>
        <p>
          Explore your favorite creator listed on our platform <br />
          follow and complete their quest to get rewards
        </p> */}

          <div className="buttons">
            <Link to="/">
              <button className="fill" data-bs-toggle="button" aria-pressed="true">Explore</button>
            </Link>
            <Link to="/quests">
              <button className="fill" disabled data-bs-toggle="button">Quests</button>
            </Link>
            <Link to="/rewards">
              <button className="fill"disabled data-bs-toggle="button">Rewards</button>
            </Link>
            <Link to="/tokens">
              <button className="fill"disabled data-bs-toggle="button">Tokens</button>
            </Link>
          </div>

          {/* <!-- Nav Content --> */}

          <Routes>
            <Route path="/" element={<Explore />} />

            <Route path="/quests" element={<Quest />} />

            <Route path="/rewards" element={<Reward />} />

            <Route path="/tokens" element={<Tokens />} />
          </Routes>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default Content;
