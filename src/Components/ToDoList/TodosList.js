import React from "react";
import "../ToDoList/Todolist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Col, Container } from "react-bootstrap";

const TodosList = ({ task, DeleteTask, EditTask }) => {
  return (
    <Container className="Todolist-container">
      <Col>
        {" "}
        <p>{task.taskname}</p>{" "}
      </Col>

      <Col>
        <FontAwesomeIcon
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
