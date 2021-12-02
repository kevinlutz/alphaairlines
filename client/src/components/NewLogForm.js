import React, { useState, useEffect } from "react";

export default function NewLogForm({ logs, addNewLog }) {
  const [pilot, setPilot] = useState(0);
  const [flight, setFlight] = useState(0);
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [airtrafficcontrol, setAirTrafficControl] = useState(0);
  const [groundscrew, setGroundsCrew] = useState(0);
  const [flightcrew, setFlightCrew] = useState(0);
  const [copilot, setCoPilot] = useState(0);
  const [pilotArray, setPilotArray] = useState([]);
  const [flightArray, setFlightArray] = useState([]);
  const [airportCodes, setAirportCodes] = useState([
    "ATL",
    "BOS",
    "DEN",
    "MIA",
    "SLC",
    "LGA",
    "JFK",
    "ABQ",
    "ORD",
    "SFO",
    "SNA",
    "LAX",
    "TPA",
    "IAH",
    "MSY",
    "SAN",
    "SEA",
    "PHX",
    "DFW",
  ]);

  //Retrieve ALL PILOTS from API
  useEffect(() => {
    fetch("http://localhost:3000/pilots")
      .then((r) => r.json())
      .then((all_pilots) => setPilotArray(all_pilots))
      .catch((error) => {
        console.log(error);
      });
    //Retrieve ALL FLIGHTS from API
    fetch("http://localhost:3000/flights")
      .then((r) => r.json())
      .then((all_flights) => setFlightArray(all_flights))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const newLogObj = {
      pilot: pilot,
      flight: flight,
      duration: duration,
      distance: distance,
      origin: origin,
      destination: destination,
      date: date,
      notes: notes,
      air_traffic_control: airtrafficcontrol,
      grounds_crew: groundscrew,
      flight_crew: flightcrew,
      co_pilot: copilot,
    };

    fetch("/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLogObj),
    })
      .then((response) => response.json())
      .then((newFlightLogObj) => {
        console.log(newFlightLogObj);
      })
      .catch((error) => console.log(error));
  }

  const handleNotesChange = (e) => {
    if (e.target.value.length <= 220) {
      setNotes(e.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        Pilot Name:{" "}
        <select
          className="form-item"
          required="required"
          placeholder="Pilot..."
          onChange={(e) => setPilot(e.target.value)}
        >
          <option value="none">Select Pilot...</option>
          {pilotArray.length > 0 &&
            pilotArray.map((pilot) => (
              <option key={pilot.id} value={pilot.id}>
                {pilot.name}
              </option>
            ))}
        </select>
      </label>
      <label>
        Flight Number:{" "}
        <select
          className="form-item"
          required="required"
          placeholder="Flight..."
          onChange={(e) => setFlight(e.target.value)}
        >
          <option value="none">Select Flight...</option>
          {flightArray.length > 0 &&
            flightArray.map((flight) => (
              <option key={flight.id} value={flight.id}>
                {flight.flight}
              </option>
            ))}
        </select>
      </label>
      <br />
      <label>
        Origin:{" "}
        <select
          className="form-item"
          required="required"
          placeholder="Origin..."
          onChange={(e) => setOrigin(e.target.value)}
        >
          <option value="none">Airport Code</option>
          {airportCodes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </label>
      <label>
        Destination:{" "}
        <select
          className="form-item"
          required="required"
          placeholder="Destination..."
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="none">Airport Code</option>
          {airportCodes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </label>
      <label>
        Duration
        <input
          type="integer"
          name="duration"
          placeholder="Duration"
          value={duration}
          required={true}
          onChange={(e) => setDuration(e.target.value)}
        />
      </label>
      <label>
        Distance
        <input
          type="integer"
          name="distance"
          placeholder="Distance"
          value={distance}
          required={true}
          onChange={(e) => setDistance(e.target.value)}
        />
      </label>
      <label>
        Date
        <input
          type="string"
          name="date"
          placeholder="Date"
          value={date}
          required={true}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Notes
        <textarea
          type="text"
          name="notes"
          value={notes}
          required={true}
          onChange={handleNotesChange}
          placeholder="Add Notes Here"
          rows={4}
          style={{ width: "400px" }}
        />
      </label>
      <label>
        Air Traffic Control Rating
        <input
          className="form-item"
          required="required"
          type="number"
          name="rating"
          step="0.5" //increment my half-stars?
          placeholder="1-5"
          value={airtrafficcontrol}
          onChange={(e) => setAirTrafficControl(e.target.value)}
          style={{ width: "50px", margin: "0px 5px 0px 0px" }}
        />
      </label>
      <label>
        Grounds Crew Rating
        <input
          className="form-item"
          required="required"
          type="number"
          name="rating"
          step="0.5" //increment my half-stars?
          placeholder="1-5"
          value={groundscrew}
          onChange={(e) => setGroundsCrew(e.target.value)}
          style={{ width: "50px", margin: "0px 5px 0px 0px" }}
        />
      </label>
      <label>
        Flight Crew Rating
        <input
          className="form-item"
          required="required"
          type="number"
          name="rating"
          step="0.5" //increment my half-stars?
          placeholder="1-5"
          value={flightcrew}
          onChange={(e) => setFlightCrew(e.target.value)}
          style={{ width: "50px", margin: "0px 5px 5px 0px" }}
        />
      </label>
      <label>
        Co-Pilot Rating
        <input
          className="form-item"
          required="required"
          type="number"
          name="rating"
          step="0.5" //increment my half-stars?
          placeholder="1-5"
          value={copilot}
          onChange={(e) => setCoPilot(e.target.value)}
          style={{ width: "50px", margin: "0px 5px 0px 0px" }}
        />
      </label>
      <button type="submit">Log New Flight</button>
    </form>
  );
}
