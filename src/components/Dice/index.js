import { Component, Fragment } from "react";
import "./dice.css";
import PropTypes from "prop-types";

class Dice extends Component {
  render() {
    return (
      <Fragment>
        <img
          src={this.props.dice}
          className={`${this.props.rolling && "shaking"}`}
          alt=""
        />
      </Fragment>
    );
  }
}

Dice.propTypes = {
  dice: PropTypes.string,
  rolling: PropTypes.bool,
};

export default Dice;
