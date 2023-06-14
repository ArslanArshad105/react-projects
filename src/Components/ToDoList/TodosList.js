import React from "react";
import "../ToDoList/Todolist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Form, Col, Container, FormCheck } from "react-bootstrap";

const TodosList = ({ task, DeleteTask, EditTask, handlechange }) => {
  // const [checked, setChecked] = useState(false);

  // const handlechange = () => {
  //   setChecked(!checked);
  //   console.log("The checkbox was toggled");
  // };
  return (
    <Container className="Todolist-container">
      <Col>
        <Form>
          <FormCheck
            checked={task.isChecked}
            onChange={() => {
              handlechange(task.taskname, task.id);
            }}
            // onChange={handlechange}
          />
        </Form>
      </Col>
      <Col>
        <span className={task.isChecked ? "On-Checked" : ""}>
          {task.taskname}
        </span>
        {/* <span>{task.taskname}</span> */}
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
