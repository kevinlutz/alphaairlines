import React, { useState, useEffect } from "react";
import LogCard from "./LogCard";

export default function LogsContainer({
  filteredLogs,
  setFilteredLogs,
  logs,
  setLogs,
}) {
  //CRUD: CREATE and add a new log card
  const addNewLog = (newLogObj) => {
    setFilteredLogs((allLogData) => [...allLogData, newLogObj]);
    setLogs((allLogData) => [...allLogData, newLogObj]);
  };

  //CRUD: DELETE the log card
  const deleteLog = (id) => {
    fetch(`http://localhost:3000/logs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("received response from delete");
        const updatedLogs = logs.filter((log) => log.id !== id);
        setFilteredLogs(updatedLogs);
        setLogs(updatedLogs);
      })
      .catch((error) => console.log(error));
  };

  //CRUD: UPDATE the notes
  function handleUpdateNotes(id, updatedNote) {
    fetch(`http://localhost:3000/logs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedNote),
    })
      .then(() => {
        console.log("patch");
        const updatedNotesConst = logs.map((log) => {
          if (log.id === id) {
            log.notes = updatedNote.notes;
            return log;
          } else {
            return log;
          }
        });
        setLogs(updatedNotesConst);
        setFilteredLogs(updatedNotesConst);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="log-cards">
      {filteredLogs.map((log) => {
        return (
          <LogCard
            deleteLog={deleteLog} //Persisting?
            handleUpdateNotes={handleUpdateNotes}
            key={log.id}
            log={log}
          />
        );
      })}
    </div>
  );
}
