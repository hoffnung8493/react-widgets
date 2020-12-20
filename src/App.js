import React, { useState } from "react";
import Accordian from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translation from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  { title: "what is react", content: "React is a javascript framework " },
  { title: "why use react", content: "react is awesome" },
  { title: "how do u use react", content: "well" },
];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color blue",
    value: "blue",
  },
  {
    label: "The color green",
    value: "green ",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/translate">
        <Translation />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
    </div>
  );
};

export default App;
