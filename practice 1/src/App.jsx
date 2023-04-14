import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [currIndex, setcurrIndex] = useState();

  const list = [
    {
      title: "title 1",
      detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus.",
    },
    {
      title: "title 2",
      detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus.",
    },
    {
      title: "title 3",
      detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus.",
    },
  ];
  const handleClick = (index) => {
    if (index == currIndex) {
      setcurrIndex();
      return true;
    }
    setcurrIndex(index);
  };
  return (
    <ul>
      {list.map((l, index) => {
        return (
          <li key={index} onClick={() => handleClick(index)}>
            <div>{l.title}</div>
            {currIndex == index ? <span>{l.detail}</span> : null}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
