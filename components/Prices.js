import React, { Component } from "react";
class Prices extends Component {
  state = {
    currency: "USD"
  };
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <span>BitCoin rate for - {this.props.bpi.bpi.USD.description}</span>
            <span className="badge badge-warning ml-2">
              {this.props.bpi.bpi.USD.rate}
            </span>
          </li>
          {console.log(this.props)}
        </ul>
      </div>
    );
  }
}

export default Prices;
