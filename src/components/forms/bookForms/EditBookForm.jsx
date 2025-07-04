import CustomInput from "@components/customInput/CustomInput";
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { editBookInput } from "@assets/customInput/bookInput";
import useForm from "@hooks/useForm";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateBookAPI } from "@features/books/bookAPI";

const initialState = {};
const EditBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const { _id } = useParams();
  const navigate = useNavigate();
  // console.log(_id);

  const { books } = useSelector((state) => state.bookInfo);
  // console.log(books);

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);
      selectedBook?._id ? setForm(selectedBook) : navigate("/user/books");
    }
  }, [_id, books, setForm, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);

    const {
      addedBy,
      createdAt,
      lastUpdatedBy,
      slug,
      updatedAt,
      available,
      isbn,
      __v,

      ...rest
    } = form;
    // console.log(rest);
    const result = await updateBookAPI({ ...rest, _id: form._id });

    console.log(result);
  };
  console.log(form);
  return (
    <div className="p-4">
      <h3>Update your Book Details </h3>
      <Form className="m-2" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check
            name="status"
            type="switch"
            id="custom-switch"
            label={form.status?.toUpperCase()}
            checked={form.status === "active"}
            onChange={handleOnChange}
          />
        </Form.Group>

        {editBookInput.map((input) => (
          <CustomInput
            key={input.name}
            {...input}
            onChange={handleOnChange}
            value={form[input.name] || ""}
          />
        ))}
        <div className="mb-3">
          <hr />
          <h4>Additional Info </h4>
          <br />
          <div className="mb-2">
            Added By:{form?.addedBy?.name} <br />
            Date:{form?.createdAt}
          </div>
          <div>
            Last Updated By:{form?.lastUpdatedBy?.name} <br />
            Date:{form.updatedAt}
          </div>
        </div>
        <div className="d-grid">
          <Button type="submit">Edit Book</Button>
        </div>
      </Form>
    </div>
  );
};

export default EditBookForm;
