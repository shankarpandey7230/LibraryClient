import CustomInput from "@components/customInput/CustomInput";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { bookInput } from "@assets/customInput/bookInput";
import useForm from "@hooks/useForm";

import { postNewBookAction } from "@features/books/bookAction";

const initialState = {};
const NewBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const [image, setImage] = useState();

  const handleOnImageSelect = (e) => {
    // console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    const dataForm = new FormData();
    for (const key in form) {
      // console.log(key, form[key]);
      dataForm.append(key, form[key]);
    }
    dataForm.append("image", image);
    // console.log("image file:", image);

    postNewBookAction(dataForm);
    setForm(initialState);
  };
  return (
    <div className="p-4">
      <h3>Upload your Book Details </h3>
      <Form
        className="m-2"
        onSubmit={handleOnSubmit}
        encType="multipart/form-data"
      >
        {bookInput.map((input) => (
          <CustomInput
            key={input.name}
            {...input}
            onChange={handleOnChange}
            value={form[input.name] || ""}
          />
        ))}
        {
          <Form.Group className="mb-3">
            <Form.Control
              onChange={handleOnImageSelect}
              type="file"
              name="image"
              required
            ></Form.Control>
          </Form.Group>
        }
        <div className="d-grid">
          <Button type="submit">Add Book</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;
