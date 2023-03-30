import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <hr />
      <Home></Home>
    </div>
  );
};

export default App;
