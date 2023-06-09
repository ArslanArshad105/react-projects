import React from "react";
import { Container, Form, FormControl, FormGroup } from "react-bootstrap";

const InputTodos = () => {
  return (
    <Container className="InputTodos">
      <h1 className="InputTodosh1">Get Things Done!</h1>
      <Form>
        <FormGroup>
          <FormControl
            className="InputTodos-FormControl"
            type="text"
            placeholder="What is the Task Today?"
          />
        </FormGroup>
      </Form>
    </Container>
  );
};

export default InputTodos;
