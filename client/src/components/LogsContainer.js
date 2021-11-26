import React, { useState, useEffect } from "react";

export default function LogsContainer() {
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/logs")
      .then((r) => r.json())
      .then((allLogData) => setLogs(allLogData));
  }, []);

  const addNewLog = (newLogObj) => {
    setLogs((allLogData) => [...allLogData, newLogObj]);
  };

  const filteredPilots = logs.filter(
    (log) =>
      log.pilot.pilot_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.flight.flight_number.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <div>
      <h1>hello</h1>
      <LogCard
        deleteLog={deleteLog}
        handleUpdateNotes={handleUpdateNotes}
        key={log.id}
        log={log}
      />
    </div>
  );
}
