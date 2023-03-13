import React from "react";
import ReactDOM from "react-dom/client";
import Gallery from "./Gallery";
import { Profile } from "./Gallery";
import DisplayButton from "./Display";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      <Gallery />
      <Profile />
      <DisplayButton />
    </div>
  );
};

root.render(<App />);
