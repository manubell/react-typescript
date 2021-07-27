import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // let firstValue: string = "Manu";
  // let firstValue: number = 1;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2, 3, 35];
  let firstValue: Array<String> = ["2", "3", "35"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {} is of {typeof firstValue} type!
        </p>
      </header>
    </div>
  );
}

export default App;
