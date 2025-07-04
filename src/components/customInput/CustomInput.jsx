import React from "react";
import Form from "react-bootstrap/Form";

const CustomInput = ({ label, passRef, value, ...rest }) => {
  let valueData = value;
  if (rest.type === "date") {
    valueData = value ? value.slice(0, 10) : "";
  }
  console.log(valueData);
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} ref={passRef} value={valueData} />
    </Form.Group>
  );
};

export default CustomInput;
