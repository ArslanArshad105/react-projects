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
    if (inputList === "") {
    } else {
      AddTodo(inputList);
      setInputList("");
    }
  };
  return (
    <Container style={{ marginBottom: "20px" }}>
      <h1 className="InputTodosh1">Get Things Done!</h1>
      <div>
        <InputGroup>
          <FormControl
            className="InputTodos-FormControl"
            type="text"
            placeholder="What is the Task Today?"
            maxLength={50}
            value={inputList}
            onChange={OnInputChange}
            required
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
