import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Question from "./components/Question/Question";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <hr />
      <Home></Home>
      <Question></Question>
      <ToastContainer />
    </div>
  );
};

export default App;
