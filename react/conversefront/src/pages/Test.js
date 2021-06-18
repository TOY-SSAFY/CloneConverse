import React from "react";
import { useObserver } from "mobx-react";
// import useStore from "../utils/hooks/useStore";
import store from "../stores";

const Test = () => {
  const { counterStore } = store();

  const increase = () => {
    counterStore.increase();
  };

  const decrease = () => {
    counterStore.decrease();
  };

  return useObserver(() => (
    <div>
      <h1>{counterStore.number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  ));
};

export default Test;
