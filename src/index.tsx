import * as React from "react";
import { render } from "react-dom";

import { observable, action } from "mobx";
import { observer } from "mobx-react";

class HelloData {
  @observable clickCount = 0;

  @action
  increment = () => {
    console.log(`BE4 clickCount`, this.clickCount);
    this.clickCount++;
    console.log(`AFTER clickCount`, this.clickCount);
  };
}

@observer
class App extends React.Component<{}> {
  data = new HelloData();

  render() {
    const { increment, clickCount } = this.data;

    return <button onClick={increment}>Count: {clickCount}</button>;
  }
}

render(<App />, document.getElementById("app"));
