import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <div
        className="captain-stripes"
        style={{
          backgroundImage: "url('/images/pilot_ranking_stripes.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div id="logo">
        <img src="/images/PilotWingsLogo.png" alt="alpha airlines wings logo" />
        <div className="slogan">
          <h1>Flight Logs Made Easy</h1>
          <button>Enter</button>
        </div>
      </div>
    </div>
  );
}
