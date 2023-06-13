import React, { useState } from "react";
import { Container } from "react-bootstrap";
import InputTodos from "./InputTodos";
import TodosList from "./TodosList";
import EditTodoTask from "./EditTodoTask";
import { v4 as uuidv4 } from "uuid";

const DisplayTodosList = () => {
  const [todos, setTodos] = useState([]);

  const AddTodos = (taskn) => {
    setTodos([
      ...todos,
      { id: uuidv4(), taskname: taskn, completed: false, isEditing: false },
    ]);
  };

  const DeleteTodoFun = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const EditTodoFun = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.Editing } : todo
      )
    );
  };

  const editTaskFun = (taskname, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          let newTodo = {
            id: todo.id,
            taskname: taskname,
            isEditing: !todo.isEditing,
          };
          return newTodo;
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <Container className="Main-Container">
        <Container className="Center-Container">
          <InputTodos AddTodo={AddTodos} />
          {todos.map((todo, index) =>
            todo.isEditing ? (
              <EditTodoTask editTaskk={editTaskFun} key={index} task={todo} />
            ) : (
              <TodosList
                key={index}
                task={todo}
                DeleteTask={DeleteTodoFun}
                EditTask={EditTodoFun}
              />
            )
          )}
        </Container>
      </Container>
    </>
  );
};

export default DisplayTodosList;
