import React from "react";
import "../ToDoList/Todolist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const TodosList = ({ task, DeleteTask, EditTask }) => {
  return (
    <Container className="Todolist-container">
      <p>{task.taskname}</p>

      <Container>
        <FontAwesomeIcon icon={faPenToSquare} onClick={EditTask} />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            DeleteTask(task.id);
          }}
        />
      </Container>
    </Container>
  );
};

export default TodosList;
