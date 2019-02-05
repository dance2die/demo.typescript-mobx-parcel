import * as React from "react";
import { observer } from "mobx-react";
import { FieldState } from "formstate";

@observer
export class FieldInput extends React.Component<{
  fieldState: FieldState<string>;
}> {
  render() {
    const { fieldState } = this.props;
    return (
      <input
        style={{ border: "1px solid skyblue" }}
        value={fieldState.value}
        onChange={e => fieldState.onChange(e.target.value)}
      />
    );
  }
}
