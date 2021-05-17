import "./index.css";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Features from "./components/Features";
import Resources from "./components/Resources";
import Pricing from "./components/Pricing";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppBody>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/features">
              <Features />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/resources">
              <Resources />
            </Route>
          </Switch>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div``;
