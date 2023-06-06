import { Container } from "react-bootstrap";
import "../LoadingSpinner/Spinner.css";

const Spinner = () => {
  return (
    <Container className="spinner-container">
      <svg
        width="20%"
        viewBox="0 0 276 276"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="spinner">
          <circle
            id="bottom"
            cx="138"
            cy="138"
            r="114"
            stroke="#DBDBDB"
            stroke-width="18"
          />
          <circle
            id="upper"
            cx="138"
            cy="138"
            r="114"
            stroke="#72BBFF"
            stroke-width="20"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="200"
          />
        </g>
      </svg>
    </Container>
  );
};

export default Spinner;
