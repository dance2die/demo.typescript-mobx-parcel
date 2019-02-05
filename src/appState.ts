import { observable, action } from "mobx";
import { FieldState } from "formstate";

class ApplicationState {
  @observable
  items: string[] = [];

  @observable
  currentItem = new FieldState("");

  @action
  addCurrentItem() {
    this.items.push(this.currentItem.value);
    this.currentItem.onChange("");
  }

  @action
  reset() {
    this.items = [];
    this.currentItem.onChange("");
  }
}

export const appState = new ApplicationState();
