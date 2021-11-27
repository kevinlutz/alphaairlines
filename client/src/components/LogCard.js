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
    rating,
  } = log;
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    deleteLog(id);
    fetch(`/trips/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="log-card">
      <div className="log-text">
        <p>
          <strong>Pilot Name:</strong> {pilot}
        </p>
        <p>
          <strong>Flight Number:</strong> {flight}
        </p>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Distance:</strong> {distance} miles
        </p>
        <p>
          <strong>Duration:</strong> {duration} hours
        </p>
        <p>
          <strong>Origin:</strong> {origin}
        </p>
        <p>
          <strong>Destination:</strong> {destination} miles
        </p>
        <p>
          <strong>Notes:</strong> $ {notes}{" "}
          {isEditing ? (
            <EditNote
              setIsEditing={setIsEditing}
              handleUpdateNotes={handleUpdateNotes}
              log={log}
            />
          ) : (
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
              Edit
            </button>
          )}
        </p>
        <div>
          Rating:{" "}
          <StarRating percentage={rating / 5} onClick={handleUpdateRating} />
        </div>
        <div>
          <button onClick={handleDelete}> 🗑️ </button>
        </div>
      </div>
    </div>
  );
}
