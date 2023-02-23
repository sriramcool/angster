import React from "react";
import "./Explore.css";

function Explore() {
  return (
    <div className="cards">
      <div className="card border-dark mb-3" style={{ width: "18rem" }}>
        <img src="./scout.jpg" className="card-img-top" alt="..." height="250px" width="250px" />

        <div className="card-footer bg-dark border-success">Scout</div>
      </div>
      <div className="card border-dark mb-3" style={{ width: "18rem" }}>
        <img src="./mortal.jpg" className="card-img-top" alt="..." height="250px" width="240px" />

        <div className="card-footer bg-dark border-success">Mortal</div>
      </div>
      <div className="card border-dark mb-3" style={{ width: "18rem" }}>
        <img src="./pwediepie.jpg" className="card-img-top" alt="..." height="250px" width="240px" />

        <div className="card-footer bg-dark border-success">Pewdiepie</div>
      </div>
      <div className="card border-dark mb-3" style={{ width: "18rem" }}>
        <img src="./panda.jpg" className="card-img-top" alt="..." height="250px" width="240px" />

        <div className="card-footer bg-dark border-success">Panda</div>
      </div>
    </div>
  );
}

export default Explore;
