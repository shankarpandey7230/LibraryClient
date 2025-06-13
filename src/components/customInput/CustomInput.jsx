import React from "react";
import Form from "react-bootstrap/Form";

const CustomInput = ({ label, passRef, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} ref={passRef} />
    </Form.Group>
  );
};

export default CustomInput;
