import React, { useState } from "react";

const AddList = (props) => {
  const [userText, setUserText] = useState("");
  const addListHandler = (event) => {
    event.preventDefault();
    if (userText === "") {
      alert("fill");
    } else {
      const newList = {
        id: Date.now(),
        title: userText,
      };

      setUserText("");

      props.onAddList(newList);
    }
  };

  const inputValueHandler = (event) => {
    setUserText(event.target.value);
  };
  return (
    <>
      <form onSubmit={addListHandler}>
        <input type="text" value={userText} onChange={inputValueHandler} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddList;
