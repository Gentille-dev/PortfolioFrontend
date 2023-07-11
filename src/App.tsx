import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index"

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
};

export default App;