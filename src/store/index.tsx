import { action, observable } from "mobx";

class AppState {
  @observable public counter: number = 0;

  @action public addCounter() {
    this.counter++;
  }
}

export default AppState;
