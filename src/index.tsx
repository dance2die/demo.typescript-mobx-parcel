import * as React from "react";
import { render } from "react-dom";

import { observable, action, configure } from "mobx";
import { observer } from "mobx-react";
import MobxReactDevtools from "mobx-react-devtools";

configure({ enforceActions: true });

class HelloData {
  @observable clickCount = 2;

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

render(
  <>
    <App />
    <MobxReactDevtools />
  </>,
  document.getElementById("app")
);
