import React from "react";

export default function Home() {
  return (
    <div
      className="captain-stripes"
      style={{
        backgroundImage: "url('/images/AirlineCaptains.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src="/images/PilotWingsLogo.png" alt="alpha airlines wings logo" />
    </div>
  );
}
