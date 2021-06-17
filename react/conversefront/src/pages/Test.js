import React, { Component } from "react";
import { observer } from "mobx-react";
import { useObserver } from "mobx-react";
import useStore from "../utils/hooks/useStore";

const Test = () => {
  const { CounterStore } = useStore();

  const increase = () => {
    CounterStore.increase();
  };

  const decrease = () => {
    CounterStore.decrease();
  };

  return useObserver(() => (
    <div>
      <h1>{CounterStore.number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  ));
};

export default Test;
