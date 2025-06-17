import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-center">
      <h1>The Zerodha Universe</h1>
      <p className="text-muted">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <img src="media/images/dnld/zerodhafundhouse.png" style={{ maxWidth: "200px" }} alt="Fund House" />
          <p className="text-muted mt-2">Asset Management Venture</p>
        </div>

        <div className="col-md-4 mb-4">
          <img src="media/images/dnld/sensibulllogo.svg" style={{ width: "200px", height: "auto" }} alt="Sensibull" />
          <p className="text-muted mt-2">Options Trading platform</p>
        </div>

        <div className="col-md-4 mb-4">
          <img src="media/images/dnld/tijori.svg" style={{ maxWidth: "200px" }} alt="Tijori" />
          <p className="text-muted mt-2">Investment research platform</p>
        </div>

        <div className="col-md-4 mb-4">
          <img src="media/images/dnld/streakLogo.png" style={{ maxWidth: "200px" }} alt="Streak" />
          <p className="text-muted mt-2">Systematic Trading platform</p>
        </div>

        <div className="col-md-4 mb-4">
          <img src="media/images/dnld/smallcaseLogo.png" style={{ maxWidth: "200px" }} alt="Smallcase" />
          <p className="text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-md-4 mb-4">
          <img src="media/images/dnld/dittoLogo.png" style={{ maxWidth: "200px" }} alt="Ditto" />
          <p className="text-muted mt-2">Personalized adviser </p>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary px-4 py-2 fs-5">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;