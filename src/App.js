import React, { useState } from "react";
import Accordion from "./components/Accordion";
import search from "./components/Search";
import Dropdown from "./components/Dropdown";
const items = [
  {
    title: "what is react",
    content: "React is javascript framework",
  },
  {
    title: "why we use react",
    content: "react is my fav",
  },
  {
    title: "how do we use react",
    content: "By creacting component",
  },
];
const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "the color is green",
    value: "Green",
  },
  {
    label: "shade of blue",
    value: "blue",
  },
];
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onselectedChange={setSelected}
        // convention on__Change
        options={options}
      />
    </div>
  );
};
