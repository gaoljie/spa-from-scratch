import { action, observable } from "mobx";

export default class Store {
  @observable count = 0;

  @action addCount() {
    this.count += 1;
  }

  @action reduceCount() {
    this.count -= 1;
  }
}
