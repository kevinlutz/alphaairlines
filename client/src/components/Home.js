import React from "react";

export default function Home() {
  return (
    <div>
      <div
        className="captain-stripes"
        style={{
          backgroundImage: "url('/images/pilot_ranking_stripes.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src="/images/PilotWingsLogo.png"
          alt="alpha airlines wings logo"
          className="logo"
        />
        <h1>Flight Logs Made Easy</h1>
        <button>Enter</button>
      </div>
    </div>
  );
}
