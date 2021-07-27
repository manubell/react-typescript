import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // tuple
  let aTuple: [string, number] = ["Manu", 1];
  // enum
  enum Codes {
    first = 1,
    second = 2,
  }
  //any
  let firstname: any = "Manu";
  // void
  const warning = (): void => {
    console.log("warning");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstname} is of {typeof firstname} type!
        </p>
      </header>
    </div>
  );
}

export default App;
