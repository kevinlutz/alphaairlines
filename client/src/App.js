//CSS STYLING
import "./App.css";
//COMPONENTS
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LogsContainer from "./components/LogsContainer";
import NewLogForm from "./components/NewLogForm";
import ContactUs from "./components/ContactUs";
//REACT ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);

  //CRUD: READ all logs
  useEffect(() => {
    fetch("/logs")
      .then((r) => r.json())
      .then((allLogData) => {
        setLogs(allLogData);
        setFilteredLogs(allLogData);
      });
  }, []);

  const onChangeSearch = (e) => {
    const updatedLogs = logs.filter(
      (log) =>
        log.pilot.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        log.destination.toLowerCase().includes(e.target.value.toLowerCase()) ||
        log.origin.toLowerCase().includes(e.target.value.toLowerCase()) ||
        log.flight.flight === e.target.value
    );
    setFilteredLogs(updatedLogs);
  };

  return (
    <>
      <Router>
        <Navbar
          search={search}
          setSearch={setSearch}
          onChangeSearch={onChangeSearch}
        />
        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/logscontainer"
              element={
                <LogsContainer
                  filteredLogs={filteredLogs}
                  setFilteredLogs={setFilteredLogs}
                  logs={logs}
                  setLogs={setLogs}
                />
              }
            />
            <Route
              path="newlogform"
              element={<NewLogForm /*addNewFlightLog={addNewFlightLog}*/ />}
            />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
