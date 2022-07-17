import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// Keep this import in parent level
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

function App() {
  // let items = JSON.parse(localStorage.getItem("list")) || [];
  // console.log(items);
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    setList(JSON.parse(localStorage.getItem("list")) || []);
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  function handleAdd(todoItem) {
    setList([...list, todoItem]);
    // console.log(todoItem);
    localStorage.setItem("list", JSON.stringify([...list, todoItem]));
  }

  function handleDelete(index) {
    const tempArr = list;
    tempArr.splice(index, 1);
    setList([...tempArr]);
    localStorage.setItem("list", JSON.stringify(tempArr));
  }

  return (
    <Container>
      <TodoForm handleAdd={handleAdd} />
      <TodoList list={list} handleDelete={handleDelete} />
    </Container>
  );
}

export default App;
