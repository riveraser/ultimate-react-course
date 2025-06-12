import { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStep(value) {
    setStep((s) => s + value);
  }

  function handleCount(value) {
    setCount((c) => c + value);
  }
  function calculateDate() {
    return new Date(
      new Date().setDate(new Date().getDate() + count)
    ).toLocaleDateString();
  }

  return (
    <div>
      <div className="step">
        <button onClick={() => handleStep(-1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => handleStep(1)}>+</button>
      </div>
      <div className="counter">
        <button onClick={() => handleCount(-step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => handleCount(step)}>+</button>
      </div>
      <div className="date">
        <p>
          <span>
            Today is {Math.abs(count)}
            {count > 0 ? ` days from today is ` : " days ago was "}{" "}
            {calculateDate()}
          </span>
        </p>
      </div>
    </div>
  );
}
