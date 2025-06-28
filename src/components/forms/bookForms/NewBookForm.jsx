import CustomInput from "@components/customInput/CustomInput";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { bookInput } from "@assets/customInput/bookInput";
import useForm from "@hooks/useForm";

import { postNewBookAction } from "@features/books/bookAction";

const initialState = {
  title: "",
  year: "",
  author: "",
  imgUrl: "",
  isbn: "",
  genre: "",
  description: "",
};
const NewBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    postNewBookAction(form);
    setForm(initialState);
  };
  return (
    <div className="p-4">
      <h3>Upload your Book Details </h3>
      <Form className="m-2" onSubmit={handleOnSubmit}>
        {bookInput.map((input) => (
          <CustomInput
            key={input.name}
            {...input}
            onChange={handleOnChange}
            value={form[input.name] || ""}
          />
        ))}
        <div className="d-grid">
          <Button type="submit">Add Book</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;
