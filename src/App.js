import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(1);
  // const factorial = factorialOf(number);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);
  return (
    <div className="App">
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

export default App;
const factorialOf = (n) => {
  console.log("Factorial is called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
};
