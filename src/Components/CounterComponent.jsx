import React from "react";
import { useCounter } from "../Hooks/useCounter.js";

export const CounterComponent = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h5>
        <span className="badge bg-secondary mx-auto my-2">
          Has cliqueado {counter} veces 👌
        </span>
      </h5>
      <div className="container w-100 d-flex justify-content-between p-0 m-0">
        <button
          className="btn btn-primary btn-block mx-auto mt-2"
          onClick={() => decrement(1, false)}
        >
          -1
        </button>
        <button
          className="btn btn-danger btn-block mx-auto mt-2"
          onClick={() => reset()}
        >
          Reset
        </button>
        <button
          className="btn btn-success btn-block mx-auto mt-2"
          onClick={() => increment(1)}
        >
          +1
        </button>
      </div>
    </>
  );
};

export default CounterComponent;
