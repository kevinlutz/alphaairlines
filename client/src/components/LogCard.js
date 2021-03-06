import React, { useState } from "react";
import StarRating from "./StarRating";
import EditNote from "./EditNote";

export default function LogCard({
  log,
  deleteLog,
  handleUpdateNotes,
  handleUpdateRating,
}) {
  const {
    id,
    pilot,
    flight,
    date,
    distance,
    duration,
    origin,
    destination,
    notes,
    air_traffic_control,
    grounds_crew,
    flight_attendants,
    co_pilot,
  } = log;
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteLog(id);
    fetch(`/logs/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="log-card">
      <div className="log-text">
        <img
          className="profile-pic"
          src={pilot.image} //this image has to be dynamic
          alt="commanding pilot"
        />
        <div>
          <p>
            <strong>Commanding Pilot:</strong> {pilot.name}
          </p>
          <div className="log-card-row">
            <p>
              <strong>Flight Number:</strong> DL{flight.flight}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
          </div>
          <div className="log-card-row">
            <p>
              <strong>Distance:</strong> {distance} miles
            </p>
            <p>
              <strong>Duration:</strong> {duration} hours
            </p>
          </div>
          <div className="log-card-row">
            <p>
              <strong>Origin:</strong> {origin}
            </p>
            <p>
              <strong>Destination:</strong> {destination}
            </p>
          </div>
          <div>
            <strong>Notes:</strong> {notes}{" "}
            {isEditing ? (
              <EditNote
                setIsEditing={setIsEditing}
                handleUpdateNotes={handleUpdateNotes}
                log={log}
              />
            ) : (
              <button
                onClick={() => setIsEditing((isEditing) => !isEditing)}
                className="edit-button"
              >
                Edit
              </button>
            )}
          </div>
          <div className="card-bottom">
            <div className="ratings">
              <div className="ratings-item">
                <span>Air Traffic Control: </span>
                <StarRating
                  percentage={air_traffic_control / 5}
                  onClick={handleUpdateRating} //handleAirtraffiControlRating
                />
              </div>
              <div className="ratings-item">
                <span>Grounds Crew: </span>
                <StarRating
                  percentage={grounds_crew / 5}
                  onClick={handleUpdateRating} //handleGroundsCrewRating
                />
              </div>
              <div className="ratings-item">
                <span>Flight Crew: </span>
                <StarRating
                  percentage={flight_attendants / 5}
                  onClick={handleUpdateRating} //handleFlightCrewRating
                />
              </div>
              <div className="ratings-item">
                <span>Co-Pilot: </span>
                <StarRating
                  percentage={co_pilot / 5}
                  onClick={handleUpdateRating} //handleCoPilotRating
                />
              </div>
            </div>
            <div className="delete-flight">
              <button onClick={handleDelete}> ??????? </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
