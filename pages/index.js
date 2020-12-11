import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Hello from Pluralsight. Count Value: {count}</h3>
      <button
        onClick={(event) => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={(event) => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};
