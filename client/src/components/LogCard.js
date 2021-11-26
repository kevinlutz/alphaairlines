import React from "react";

export default function LogCard({ log, deleteLog, handleUpdateNotes }) {
  const { id, pilot, flight, date, distance, origin, destination } = log;
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
          <b>Pilot Name:</b> {pilot.name}
        </p>
        <p>
          <b>Flight Number:</b> {flight.flight_number}
        </p>
        <p>
          <b>Date:</b> {date}
        </p>
        <p>
          <b>Distance:</b> {distance} miles
        </p>
        <p>
          <b>Duration:</b> {duration} hours
        </p>
        <p>
          <b>Origin:</b> {origin}
        </p>
        <p>
          <b>Destination:</b> {destination} miles
        </p>
        <p>
          <b>Notes:</b> $ {notes}{" "}
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
