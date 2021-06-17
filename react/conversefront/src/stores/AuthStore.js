import { observable } from "mobx";

const AuthStore = observable({
  number: 1,
  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
});

export { AuthStore };
