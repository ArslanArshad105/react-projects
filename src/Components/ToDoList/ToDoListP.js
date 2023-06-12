import React from "react";
import "../ToDoList/Todolist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const ToDoListP = ({ taskName }) => {
  return (
    <Container className="Todolist-container">
      <p>{taskName}</p>

      <Container>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </Container>
    </Container>
  );
};

export default ToDoListP;
