import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="coming-soon-container">
      <h1>Himanshu Singh Pvt. Ltd.</h1>
      <h2>Our website is launching soon! Stay tuned.</h2>
      <button onClick={() => alert("Thank you for your interest!")}>
        Notify Me
      </button>
    </div>
  );
};

export default App;
