import { Component, Fragment } from "react";
import "./dice.css";

class Dice extends Component {
  render() {
    return (
      <Fragment>
        <img
          src={this.props.dice}
          className={this.props.rolling && "shaking"}
          alt=""
        />
      </Fragment>
    );
  }
}

export default Dice;
