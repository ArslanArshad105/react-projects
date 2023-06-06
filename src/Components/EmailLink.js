import React from "react";
import { Link } from "react-router-dom";

const EmailLink = ({ label, mailto }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
      }}
    >
      <h4>{label}</h4>
    </Link>
  );
};

export default EmailLink;
