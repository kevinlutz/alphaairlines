import React, { useState, useEffect } from "react";
import LogCard from "./LogCard";

export default function LogsContainer({ search }) {
  const [logs, setLogs] = useState([
    {
      id: 1,
      origin: "ATL",
      destination: "SNA",
      duration: 2,
      pilot: "jon",
      flight: 870,
      date: "3-2-2021",
      distance: 2000,
      notes: "great flight",
      rating: 4,
    },
  ]);

  useEffect(() => {
    // fetch("/logs")
    //   .then((r) => r.json())
    //   .then((allLogData) => setLogs(allLogData));
  }, []);

  const addNewLog = (newLogObj) => {
    setLogs((allLogData) => [...allLogData, newLogObj]);
  };

  // const filteredPilots = logs.filter(
  //   (log) =>
  //     log.pilot.toLowerCase().includes(search.toLowerCase()) ||
  //     log.flight == search
  // );

  const deleteLog = (id) => {
    const updatedLogs = logs.filter((log) => log.id !== id);
    setLogs(updatedLogs);
  };

  function handleUpdateNotes(updatedNote) {
    const updatedNotesConst = logs.map((log) => {
      if (log.id === updatedNote.id) {
        return updatedNote;
      } else {
        return log;
      }
    });
    setLogs(updatedNotesConst);
  }

  function handleUpdateRating(pct, id) {
    const newRating = pct * 5;
    // fetch(`http://localhost:8000/logs/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ rating: newRating }),
    // })
    //   .then((r) => r.json())
    //   .then(() => {
    //     //what to do after updating the rating
    //   });
  }

  return (
    <div>
      <h1>hello</h1>
      {logs.map((log) => {
        return (
          <LogCard
            deleteLog={deleteLog}
            handleUpdateNotes={handleUpdateNotes}
            handleUpdateRating={handleUpdateRating}
            key={log.id}
            log={log}
          />
        );
      })}
    </div>
  );
}
