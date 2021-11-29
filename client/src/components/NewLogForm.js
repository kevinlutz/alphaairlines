import React, { useState } from "react";

export default function NewLogForm(addNewLog) {
  const [pilot, setPilot] = useState("");
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

  function handleSubmit(e) {
    e.preventDefault();

    const newLogObj = {
      pilot: pilot, //value={?}
      flight: flight, //value={?}
      duration: duration,
      distance: distance,
      origin: origin,
      destination: destination,
      date: date,
      notes: notes,
      airtrafficcontrol: airtrafficcontrol,
      groundscrew: groundscrew,
      flightcrew: flightcrew,
      copilot: copilot,
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
        addNewLog(newFlightLogObj);
      });
  }

  const handlePilot = (e) => {
    setPilot(e.target.value);
  };

  const handleFlight = (e) => {
    setFlight(e.target.value);
  };

  return (
    <form>
      <label>
        Pilot Name:
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handlePilot}
        >
          <option selected>Select Pilot</option>
          <option value="1">Leah Smith</option>
          <option value="2">John Baker</option>
          <option value="3">Tom Anderson</option>
        </select>
      </label>
      <label>
        Flight Number:
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleFlight}
        >
          <option selected>Select Flight</option>
          <option value="1">1520</option>
          <option value="2">7880</option>
          <option value="3">1970</option>
        </select>
      </label>
      <label>
        Origin
        <input
          type="string"
          name="origin"
          placeholder="Origin"
          value={origin}
          required={true}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </label>
      <label>
        Destination
        <input
          type="string"
          name="destination"
          placeholder="Destination"
          value={destination}
          required={true}
          onChange={(e) => setDestination(e.target.value)}
        />
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
          type="datetime" //correct type?
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
          type="text" //correct type?
          name="notes"
          value={notes}
          required={true}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add Notes Here"
          rows={10}
        />
      </label>
      <label>
        Air Traffic Control Rating
        <input
          className="form-item"
          required="required"
          type="number"
          name="rating"
          step="1"
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
          step="1"
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
          step="1"
          placeholder="1-5"
          value={flightcrew}
          onChange={(e) => setFlightCrew(e.target.value)}
          style={{ width: "50px", margin: "0px 5px 0px 0px" }}
        />
      </label>
      <label>
        Co-Pilot Rating
        <input
          className="form-item"
          required="required"
          type="number"
          name="rating"
          step="1"
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
