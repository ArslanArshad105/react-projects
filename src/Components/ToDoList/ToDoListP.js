import React from "react";
import "../ToDoList/Todolist.css";
import InputTodos from "./InputTodos";
import { Container } from "react-bootstrap";
const ToDoListP = () => {
  return (
    <>
      <Container className="TodoListP-Bg">
        <InputTodos />
      </Container>
    </>
  );
};

export default ToDoListP;
