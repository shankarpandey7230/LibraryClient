import CustomInput from "@components/customInput/CustomInput";
import React, { useEffect, useState } from "react";
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
  const [images, setImages] = useState([]);
  const [imgToDelete, setImgToDelete] = useState([]);
  const { books } = useSelector((state) => state.bookInfo);
  // console.log(books);

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);
      selectedBook?._id ? setForm(selectedBook) : navigate("/user/books");
    }
  }, [_id, books, setForm, navigate]);

  const handleOnImageSelect = (e) => {
    const files = [...e.target.files];
    if (files.length > 2) {
      alert("Only 2 images are allowed");

      // Clear file input manually
      e.target.value = "";

      return;
    }

    setImages([...e.target.files]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);
    if (imgToDelete.includes(form.imgUrl)) {
      return alert("You can not delete the thumbnail");
    }

    const {
      addedBy,
      createdAt,
      lastUpdatedBy,
      slug,
      updatedAt,
      available,
      isbn,
      __v,
      averageRating,
      ...rest
    } = form;
    // console.log(rest);
    rest._id = form._id;
    const dataForm = new FormData();
    for (const key in rest) {
      dataForm.append(key, rest[key]);
    }
    images.map((img) => dataForm.append("images", img));
    imgToDelete.forEach((img) => dataForm.append("imgToDelete[]", img));

    // imgToDelete.map((img) => dataForm.append("imgToDelete", img));

    const result = await updateBookAPI(dataForm);

    // console.log(result);
  };

  const handleOnImageToDelete = (e) => {
    const { checked, value } = e.target;
    // console.log(checked, value);
    checked
      ? setImgToDelete([...imgToDelete, value])
      : setImgToDelete(imgToDelete.filter((img) => img !== value));
  };

  // console.log(imgToDelete);
  // console.log(form);
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

        <div className="m-3 d-flex">
          {form.imageList?.map((img) => (
            <div key={img} className="m-1">
              <Form.Check
                type="radio"
                name="imgUrl"
                value={img}
                checked={form.imgUrl === img}
                onChange={handleOnChange}
                label={"Thumbnail"}
              />
              <Form.Check
                type="checkbox"
                label="Delete"
                value={img}
                onChange={handleOnImageToDelete}
              />

              <img
                src={import.meta.env.VITE_BASE_API_URL + img.slice(6)}
                alt="Book"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                className="img-thumbnail"
              />
            </div>
          ))}
        </div>
        <Form.Group className="mb-3 text-uppercase">
          <Form.Label>Upload More Images(Max 2 Images)</Form.Label>
          <Form.Control
            onChange={handleOnImageSelect}
            type="file"
            name="image"
            multiple
            accept="image/*"
          ></Form.Control>
        </Form.Group>
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
          <Button type="submit" variant="warning">
            Update Book
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditBookForm;
