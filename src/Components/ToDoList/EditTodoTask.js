import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  ButtonGroup,
} from "react-bootstrap";

const EditTodoTask = ({ editTaskk, task }) => {
  const [inputList, setInputList] = useState(task.taskname);

  const OnInputUpdate = (event) => {
    setInputList(event.target.value);
  };

  const updateTask = (event) => {
    if (inputList === "") {
    } else {
      event.preventDefault();
      editTaskk(inputList, task.id);
    }
  };
  return (
    <Container style={{ marginBottom: "20px" }}>
      <InputGroup>
        <FormControl
          className="InputTodos-FormControl"
          type="text"
          placeholder="Update your Today's Task?"
          maxLength={50}
          value={inputList}
          onChange={OnInputUpdate}
          required
        />

        <ButtonGroup>
          <Button className="todo-btn" onClick={updateTask}>
            Update Task
          </Button>
        </ButtonGroup>
      </InputGroup>
    </Container>
  );
};

export default EditTodoTask;
