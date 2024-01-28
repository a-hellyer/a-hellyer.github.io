import React from "react";
import { useEffect, useState } from "react"
import logo from "./logo.svg";
import "./App.css";

function App() {
  /*const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading 2..." : data}</p>
      </header>
    </div>
  );*/

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/select")
    .then((res) => res.json())
    .then((data) => setData(data.parts));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading Parts List 2... edit #2" : data}</p>
      </header>
    </div>
  );

}

export default App;