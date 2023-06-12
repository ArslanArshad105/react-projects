import React, { useState } from "react";
import { Container } from "react-bootstrap";
import InputTodos from "./InputTodos";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

const DisplayTodosList = () => {
  const [todos, setTodos] = useState([]);
  // const [current, setCurrent] = useState([]);

  const AddTodos = (taskn) => {
    setTodos([
      ...todos,
      { id: uuidv4(), taskname: taskn, completed: false, isEditing: false },
    ]);
  };

  const DeleteTodoFun = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const EditTodoFun = () => {
    return console.log("Irshad Arslan");
  };
  return (
    <>
      <Container className="Main-Container">
        <Container className="Center-Container">
          <InputTodos AddTodo={AddTodos} />
          {todos.map((todo, index) => {
            return (
              <TodosList
                key={index}
                task={todo}
                DeleteTask={DeleteTodoFun}
                EditTask={EditTodoFun}
              />
            );
          })}
        </Container>
      </Container>
    </>
  );
};

export default DisplayTodosList;
