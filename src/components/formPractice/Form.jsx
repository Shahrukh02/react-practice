import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [saveData, setSaveData] = useState([]);
  const submission = (e) => {
    e.preventDefault();
    setSaveData([...saveData, formData]);
    setFormData({ email: "", password: "" });
    console.log(saveData);
  };
  const getValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <div className="form" onSubmit={submission}>
        <form action="">
          <input
            type="text"
            name="email"
            onChange={getValue}
            value={formData.email}
          />
          <br />
          <input
            type="password"
            name="password"
            onChange={getValue}
            value={formData.password}
          />
          <br />
          <button>Submit</button>
        </form>
        <h1>{formData.email}</h1>
        <h1>{formData.password}</h1>
      </div>
    </>
  );
};

export default Form;
