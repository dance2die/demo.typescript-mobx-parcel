import * as React from "react";
import { render } from "react-dom";

import { observable, action, configure } from "mobx";
import { observer } from "mobx-react";
import MobxReactDevtools from "mobx-react-devtools";

import { appState } from "./appState";
import { FieldInput } from "./field";

configure({ enforceActions: "observed" });

@observer
class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            appState.addCurrentItem();
          }}
        >
          <FieldInput fieldState={appState.currentItem} />
          <button type="submit">Add</button>
          <button type="button" onClick={() => appState.reset()}>
            Reset
          </button>
          <ul>
            {appState.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

// class HelloData {
//   @observable clickCount = 2222;

//   @action
//   increment = () => {
//     console.log(`BE4 clickCount`, this.clickCount);
//     this.clickCount++;
//     console.log(`AFTER clickCount`, this.clickCount);
//   };
// }

// @observer
// class App extends React.Component<{}> {
//   data = new HelloData();

//   render() {
//     const { increment, clickCount } = this.data;

//     return <button onClick={increment}>Count: {clickCount}</button>;
//   }
// }

render(
  <>
    <App />
    <MobxReactDevtools />
  </>,
  document.getElementById("app")
);
