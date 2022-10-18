import { Component } from "react";
import Dice from "../Dice";
import DiceData from "../DiceImages";
import "./rollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstDiceImage: DiceData.dice1,
      secondDiceImage: DiceData.dice1,
      rolling: false,
    };
  }

  randomDice() {
    let firstDice = Math.ceil(Math.random() * 6);
    let secondDice = Math.ceil(Math.random() * 6);

    this.setState({
      rolling: true,
    });

    setTimeout(() => {
      this.setState({
        firstDiceImage: DiceData[`dice${firstDice}`],
        secondDiceImage: DiceData[`dice${secondDice}`],
        rolling: false,
      });
    }, 1200);
  }

  render() {
    return (
      <div className="container">
        <h1>Dice Game</h1>
        <div>
          <Dice dice={this.state.firstDiceImage} rolling={this.state.rolling} />
          <Dice dice={this.state.secondDiceImage} rolling={this.state.rolling} />
        </div>
        <button onClick={() => this.randomDice()}>
          {this.state.rolling ? "Rolling..." : "Roll Dice !"}
        </button>
      </div>
    );
  }
}

export default RollDice;
