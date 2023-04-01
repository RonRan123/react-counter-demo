import { useState } from "react";
export default function Counter({ name, buttonColor }) {
  const [value, setValue] = useState(0);
  return (
    <>
      <h3 style={{ color: buttonColor }}>{name}</h3>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
    </>
  );
}
