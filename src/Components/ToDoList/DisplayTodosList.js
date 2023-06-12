import React, { useState } from "react";
import { Container } from "react-bootstrap";
import InputTodos from "./InputTodos";
import ToDoListP from "./ToDoListP";
import { v4 as uuidv4 } from "uuid";

const DisplayTodosList = () => {
  const [todos, setTodos] = useState([]);
  const AddTodos = (taskname) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: taskname, completed: false, isEditing: false },
    ]);
    // console.log("debug:", todos);
  };
  // console.log("debug:", todos);

  return (
    <>
      <Container className="Main-Container">
        <Container className="Center-Container">
          <InputTodos AddTodo={AddTodos} />
          {todos.map((todo, index) => {
            return <ToDoListP key={index} taskName={todo.task} />;
          })}
        </Container>
      </Container>
    </>
  );
};

export default DisplayTodosList;
