import { observable } from "mobx";

const counterStore = observable({
  number: 1,

  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
});

export default counterStore;
