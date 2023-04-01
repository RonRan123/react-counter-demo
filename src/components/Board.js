import Counter from "./Counter.js";
export default function Board() {
  const buttons = [
    { id: 1, color: "red" },
    { id: 2, color: "blue" },
    { id: 3, color: "green" },
    { id: 4, color: "pink" },
    { id: "Bob", color: "black" },
  ];
  return (
    <>
      <h1>Counter Demo App</h1>
      {buttons.map((element, index) => (
        <Counter
          name={"Button " + element.id}
          key={"button" + index}
          buttonColor={element.color}
        />
      ))}
    </>
  );
}
