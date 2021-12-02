import React, { useState, useEffect } from "react";
import LogCard from "./LogCard";

export default function LogsContainer({ search }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("/logs")
      .then((r) => r.json())
      .then((allLogData) => setLogs(allLogData));
  }, []);

  //CRUD: CREATE and add a new log card.
  const addNewLog = (newLogObj) => {
    setLogs((allLogData) => [...allLogData, newLogObj]);
  };

  //CRUD: DELETE the log card.
  const deleteLog = (id) => {
    const updatedLogs = logs.filter((log) => log.id !== id);
    setLogs(updatedLogs);
  };

  //CRUD: UPDATE the notes.
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

  // const filteredLogs = logs.filter(
  //   (log) =>
  //     log.pilot.name.toLowerCase().includes(search.toLowerCase()) ||
  //     log.destination.toLowerCase().includes(search.toLowerCase()) ||
  //     log.origin.toLowerCase().includes(search.toLowerCase()) ||
  //     log.flight.flight == search ||
  // );

  return (
    <div className="log-cards">
      {logs.map((log) => {
        return (
          <LogCard
            deleteLog={deleteLog}
            handleUpdateNotes={handleUpdateNotes}
            key={log.id}
            log={log}
          />
        );
      })}
    </div>
  );
}
