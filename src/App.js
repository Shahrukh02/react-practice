import React from "react";
// import UseEffect from "./components/UseEffectPractice/UseEffect";
// import Form from "./components/formPractice/Form"
// import BasicTodo from "./components/basicTodo/BasicTodo";
// import Todo from "./components/todo/Todo";
import Home from "./components/RoutingPractice/Home";
import About from "./components/RoutingPractice/About";
import Contact from "./components/RoutingPractice/Contact";
import NotFound from "./components/RoutingPractice/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
