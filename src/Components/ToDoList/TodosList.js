import React from "react";
import "../ToDoList/Todolist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Form, Col, Container, FormCheck } from "react-bootstrap";

const TodosList = ({ task, DeleteTask, EditTask, handlechange }) => {
  return (
    <Container className="Todolist-container">
      <Col>
        <Form>
          <FormCheck
            checked={task.isChecked}
            onChange={() => {
              handlechange(task.taskname, task.id);
            }}
          />
        </Form>
      </Col>
      <Col>
        <span className={task.isChecked ? "On-Checked" : ""}>
          {task.taskname}
        </span>
      </Col>

      <Col>
        <FontAwesomeIcon
          className="fa-pen"
          icon={faPenToSquare}
          onClick={() => {
            EditTask(task.id);
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            DeleteTask(task.id);
          }}
        />
      </Col>
    </Container>
  );
};

export default TodosList;
