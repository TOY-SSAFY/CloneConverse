import { observable } from "mobx";

const CounterStore = observable({
  number: 1,
  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
});

export { CounterStore };
