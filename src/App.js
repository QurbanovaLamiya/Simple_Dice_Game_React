import { Component } from "react";
import "./App.css";
import RollDice from "./components/RollDice";

class App extends Component {
  render() {
    return (
      <div className="container">
        <RollDice />
      </div>
    );
  }
}

export default App;
