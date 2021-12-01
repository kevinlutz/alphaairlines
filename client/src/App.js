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
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Router>
        <Navbar />
        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logscontainer" element={<LogsContainer />} />
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
