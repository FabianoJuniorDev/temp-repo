import { Component } from "react";

export class Button extends Component {
  render() {
    const { chorume, quandoClica } = this.props;
    return <button onClick={quandoClica}>{chorume}</button>;
  }
}
