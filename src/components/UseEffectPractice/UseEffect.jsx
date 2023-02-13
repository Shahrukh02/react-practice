import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    count >= 1 ? document.title = `Chats (${count})` : document.title = `Chats`
  })
  return (
    <>
      <button onClick={()=> setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count - 1)}>-</button>
    </>
  );
};

export default UseEffect;
