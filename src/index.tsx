import * as React from "react";
import { render } from "react-dom";

class App extends React.Component<{}, { clickCount: number }> {
  state = { clickCount: 0 };

  incrementCount = () =>
    this.setState(prevState => {
      console.log(`prevState`, prevState);
      return { clickCount: prevState.clickCount + 1 };
    });

  render() {
    const { clickCount } = this.state;
    return (
      <button onClick={() => this.incrementCount()}>Count: {clickCount}</button>
    );
  }
}

render(<App />, document.getElementById("app"));
