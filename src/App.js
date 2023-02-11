import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddList from "./components/AddList";


function App() {
  const [list, setList] = useState([]);
  const addNewListHandler = (newList) => {
    setList((previousList) => previousList.concat(newList));
  };

  return (
    <>
      <AddList onAddList={addNewListHandler} />
      <List data={list} />
    </>
  );
}

export default App;
