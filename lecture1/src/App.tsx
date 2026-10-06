import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}

export default Counter;


/*function App() {
  return <Counter title="My Counter" />;
}

function Counter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{title}</h1>         Props
      <p>{count}</p>           State 

      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
} */