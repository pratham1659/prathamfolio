import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Commit from "./components/Commit";

function App() {
  return (
    <div id="root">
      <Homepage />
      <Commit />
    </div>
  );
}

export default App;
