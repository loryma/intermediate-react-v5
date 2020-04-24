import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import Check from "./Check";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        {/* <Check /> */}
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
