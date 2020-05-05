class Prices extends React.Component {
  state = {
    currency: "USD",
  };
  render() {
    let list = "";
    if (this.state.currency === "USD") {
      list = (
        <li className="list-group-item">
          BitCoin Rate for {this.props.bpi.USD.description}:{" "}
          <span className="badge badge-primary p-1">
            {this.props.bpi.USD.code}
          </span>
          <strong> {this.props.bpi.USD.rate}</strong>
        </li>
      );
    } else if (this.state.currency === "GBP") {
      list = (
        <li className="list-group-item">
          BitCoin Rate for {this.props.bpi.GBP.description}:{" "}
          <span className="badge badge-primary p-1">
            {this.props.bpi.GBP.code}
          </span>
          <strong> {this.props.bpi.GBP.rate}</strong>
        </li>
      );
    }
    if (this.state.currency === "EUR") {
      list = (
        <li className="list-group-item">
          BitCoin Rate for {this.props.bpi.EUR.description}:{" "}
          <span className="badge badge-primary p-1">
            {this.props.bpi.EUR.code}
          </span>
          <strong> {this.props.bpi.EUR.rate}</strong>
        </li>
      );
    }
    return (
      <div>
        <select
          className="form-control"
          onChange={(e) => this.setState({ currency: e.target.value })}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <br />
        <ul className="list-group">{list}</ul>
      </div>
    );
  }
}

export default Prices;
