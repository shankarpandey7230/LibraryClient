import React from "react";
import Form from "react-bootstrap/Form";

const CustomInput = ({ label, value, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} value={value || ""} />
    </Form.Group>
  );
};

export default CustomInput;
