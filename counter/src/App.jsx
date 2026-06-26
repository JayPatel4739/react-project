import React from "react"
import "./App.css"

export default function App() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="counter-container">
      <h1 className="page-title">Counter</h1>
      <div className="counter-wrapper">
        <div className="counter-number-show">
          <h1>{count}</h1>
        </div>
        <div className="button-group">
          <button onClick={decrement} className="decrement-button" aria-label="Decrement">-</button>
          <button onClick={increment} className="increment-button" aria-label="Increment">+</button>
        </div>
      </div>
    </div>
  );
}