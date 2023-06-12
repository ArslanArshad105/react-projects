import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  ButtonGroup,
} from "react-bootstrap";

const InputTodos = ({ AddTodo }) => {
  const [inputList, setInputList] = useState("");

  const OnInputChange = (event) => {
    setInputList(event.target.value);
  };
  const AddTask = () => {
    AddTodo(inputList);
    setInputList("");
  };
  return (
    <Container>
      <h1 className="InputTodosh1">Get Things Done!</h1>
      <div>
        <InputGroup>
          <FormControl
            className="InputTodos-FormControl"
            type="text"
            placeholder="What is the Task Today?"
            value={inputList}
            onChange={OnInputChange}
          />

          <ButtonGroup>
            <Button className="todo-btn" onClick={() => AddTask()}>
              Add Task
            </Button>
          </ButtonGroup>
        </InputGroup>
      </div>
    </Container>
  );
};

export default InputTodos;
