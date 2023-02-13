import React, {  useState } from "react";
import "./todo.css";

const Todo = () => {
  const [userText, setUserText] = useState("");
  const [userArr, setUserArr] = useState([]);

  const getUserValue = (event) => {
    let value = event.target.value;
    setUserText(value);
  };

  const addValueInArr = () => {
    const userObj = [{ id: Date.now(), todo: userText }];
    setUserArr(userArr.concat(userObj));
    setUserText("");
  };

  const removeItem = (id) => {
    let removeObj = userArr.filter((currElem) => {
      return currElem.id !== id;
    });
    setUserArr(removeObj);
  };

  const editItem = (id) => {
    let editObj = userArr.filter((currElem) => {
      return currElem.id === id;
    });
    let getIndexObj = userArr.findIndex((currElem) => {
      return currElem.id === id;
    });

    let getEditValue = prompt("Enter Your Edit Value", editObj[0].todo);
    userArr.splice(getIndexObj, 1, { id, todo: getEditValue });
    setUserArr([...userArr]);
  };

  const clearAll = () => {
    setUserArr([])
  }
  return (
    <>
      <div className="user_input">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" value={userText} onChange={getUserValue} />
          <button className="add_btn" onClick={addValueInArr}>
            Add
          </button>
          <button className="add_btn" onClick={clearAll}>
            Clear All
          </button>
        </form>
      </div>
      <div className="user_todos">
        {userArr.map((currElem) => {
          const { id, todo } = currElem;
          return (
            <div className="main_div" key={id}>
              <h1>
                {todo}
                <button onClick={() => removeItem(id)}>Remove Item</button>
                <button onClick={() => editItem(id)}>Edit Item</button>
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
